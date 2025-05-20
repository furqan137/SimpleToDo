import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "@/lib/mongodb";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const { completed } = await request.json();
    
    if (completed === undefined) {
      return NextResponse.json(
        { message: "Completed status is required" },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    
    const result = await db.collection("todos").updateOne(
      { _id: new ObjectId(id) },
      { $set: { completed } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { message: "Todo not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating todo:", error);
    return NextResponse.json(
      { message: "Error updating todo" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const { db } = await connectToDatabase();
    
    const result = await db.collection("todos").deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: "Todo not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting todo:", error);
    return NextResponse.json(
      { message: "Error deleting todo" },
      { status: 500 }
    );
  }
}