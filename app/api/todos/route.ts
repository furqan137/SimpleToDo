import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const todos = await db.collection("todos").find({}).toArray();
    
    return NextResponse.json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    return NextResponse.json(
      { message: "Error fetching todos" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { title, completed } = await request.json();
    
    if (!title) {
      return NextResponse.json(
        { message: "Title is required" },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    
    const result = await db.collection("todos").insertOne({
      title,
      completed: completed || false,
      createdAt: new Date(),
    });

    const newTodo = await db.collection("todos").findOne({
      _id: result.insertedId,
    });

    return NextResponse.json(newTodo, { status: 201 });
  } catch (error) {
    console.error("Error creating todo:", error);
    return NextResponse.json(
      { message: "Error creating todo" },
      { status: 500 }
    );
  }
}