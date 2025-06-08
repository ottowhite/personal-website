import Image from 'next/image';
const lsdsLink = 'https://lsds.doc.ic.ac.uk/';

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl w-full">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome</h1>
          <p className="text-lg md:text-xl text-gray-400">
            I&apos;m Otto, a first year PhD student at the{' '}
            <a href={lsdsLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-200">
              Large-Scale Data and Systems group
            </a>{' '}
            at Imperial College London. I&apos;m excited to be focussing on the
            performance and efficiency of distributed AI systems, and supporting
            these rapidly evolving workloads and heterogenous hardwares in the data centre.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/skatepark.jpg"
            alt="Skatepark"
            className="w-full h-auto max-w-md rounded-lg"
            width={1000}
            height={1000}
            priority
          />
        </div>
      </div>
    </div>
  );
}
