import TodoApp from "@/components/TodoApp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Simple Todo App</h1>
        <TodoApp />
      </div>
    </main>
  );
}