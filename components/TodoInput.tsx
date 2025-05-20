"use client";

import { useState } from "react";
import { PlusCircle } from "lucide-react";

interface TodoInputProps {
  onAddTodo: (title: string) => void;
}

export default function TodoInput({ onAddTodo }: TodoInputProps) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (title.trim()) {
      onAddTodo(title.trim());
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Add a new task..."
        />
        <button
          type="submit"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors duration-200 flex items-center gap-1"
          disabled={!title.trim()}
        >
          <PlusCircle size={18} />
          <span>Add</span>
        </button>
      </div>
    </form>
  );
}