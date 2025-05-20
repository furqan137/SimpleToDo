"use client";

import { Check, Trash2 } from "lucide-react";
import { Todo } from "@/lib/types";
import { cn } from "@/lib/utils";

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

export default function TodoList({
  todos,
  onToggleTodo,
  onDeleteTodo,
}: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No tasks found. Add a task to get started!
      </div>
    );
  }

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo._id}
          className="flex items-center justify-between bg-gray-50 p-3 rounded-md group hover:bg-gray-100 transition-colors duration-200"
        >
          <div className="flex items-center gap-3 flex-1">
            <button
              onClick={() => onToggleTodo(todo._id)}
              className={cn(
                "w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200",
                todo.completed
                  ? "bg-green-500 border-green-500"
                  : "border-gray-300 hover:border-primary"
              )}
            >
              {todo.completed && <Check size={14} className="text-white" />}
            </button>
            <span
              className={cn(
                "transition-all duration-200",
                todo.completed && "line-through text-gray-400"
              )}
            >
              {todo.title}
            </span>
          </div>
          <button
            onClick={() => onDeleteTodo(todo._id)}
            className="text-gray-400 hover:text-destructive transition-colors duration-200 p-1 opacity-0 group-hover:opacity-100"
            aria-label="Delete task"
          >
            <Trash2 size={18} />
          </button>
        </li>
      ))}
    </ul>
  );
}