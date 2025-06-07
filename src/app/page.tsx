import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome</h1>
      <p className="text-xl text-gray-400">I'm Otto White</p>
    </div>
  );
}
