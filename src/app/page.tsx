export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-start justify-center px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome</h1>
      <p className="text-lg md:text-xl text-gray-400">
        I&apos;m a first year PhD student at the Large-Scale Data and Systems group at Imperial College London. I&apos;m excited to be focussing on the performance and efficiency of distributed AI systems, and supporting these rapidly evolving workloads and heterogenous hardwares in the data centre.
      </p>
    </div>
  );
}
