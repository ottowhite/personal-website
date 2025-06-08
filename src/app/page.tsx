import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl w-full">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome</h1>
          <p className="text-lg md:text-xl text-gray-400">
            I&apos;m Otto, a first year PhD student at the Large-Scale Data and Systems group at Imperial College London. I&apos;m excited to be focussing on the performance and efficiency of distributed AI systems, and supporting these rapidly evolving workloads and heterogenous hardwares in the data centre.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/skatepark.jpg"
            alt="Skatepark"
            className="w-full max-w-md rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
