import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main className="grow">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">Content</div>
      </main>
    </>
  );
}
