import Image from 'next/image';
const lsdsLink = 'https://lsds.doc.ic.ac.uk/';

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
      <div className="flex flex-col md:flex-row items-start gap-8 max-w-6xl w-full">
        <div className="flex-1">
          <div className="mb-6">
            <span className="text-green-500">$</span> <span className="text-green-400">cat welcome.txt</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-green-400">
            <span className="text-green-500">&gt;</span> WELCOME
          </h1>
          <div className="text-base md:text-lg text-green-400/90 space-y-4 font-mono leading-relaxed">
            <p>
              <span className="text-green-500">→</span> I&apos;m Otto, a first year PhD student at the{' '}
              <a
                href={lsdsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-300 hover:text-green-100 underline decoration-green-500/50 hover:decoration-green-300"
              >
                Large-Scale Data and Systems group
              </a>
              {' '}at Imperial College London.
            </p>
            <p>
              <span className="text-green-500">→</span> I&apos;m excited to be focussing on the
              performance and efficiency of distributed AI systems, and supporting
              these rapidly evolving workloads and heterogenous hardwares in the data centre.
            </p>
          </div>
          <div className="mt-6 text-green-500/70">
            <span className="terminal-cursor">_</span>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="border-2 border-green-500/30 p-2">
            <Image
              src="/skatepark.jpg"
              alt="Skatepark"
              className="w-full h-auto max-w-md grayscale contrast-125 brightness-90"
              width={1000}
              height={1000}
              priority
            />
            <div className="text-green-500/70 text-xs mt-2 font-mono">
              [image: skatepark.jpg]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
