import Image from "next/image";
const lsdsLink = "https://lsds.doc.ic.ac.uk/";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
      <div className="flex flex-col md:flex-row items-start gap-8 max-w-6xl w-full">
        <div className="flex-1">
          <div className="mb-6">
            <span className="text-cyan-400">you@ottos-website</span>
            <span className="text-gray-400">:</span>
            <span className="text-green-400 font-bold">~</span>
            <span className="text-gray-400">$</span>{" "}
            <span className="text-gray-100">cat welcome.txt</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
            WELCOME
          </h1>
          <div className="text-base md:text-lg text-gray-100 space-y-4 font-mono leading-relaxed">
            <p>
              I&apos;m Otto, a second
              year PhD student at the{" "}
              <a
                href={lsdsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-200 underline decoration-cyan-500/50 hover:decoration-cyan-300"
              >
                Large-Scale Data and Systems group
              </a>{" "}
              at Imperial College London.
            </p>
            <p>
              I&apos;m excited to be
              focussing on the performance and efficiency of distributed AI
              systems, and supporting these rapidly evolving workloads and
              heterogenous hardwares in the data centre.
            </p>
          </div>
          <div className="mt-6">
            <span className="text-cyan-400">you@ottos-website</span>
            <span className="text-gray-400">:</span>
            <span className="text-green-400 font-bold">~</span>
            <span className="text-gray-400">$</span>{" "}
            <span className="text-gray-500 terminal-cursor">_</span>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/skatepark.jpg"
            alt="Skatepark"
            className="w-full h-auto max-w-md grayscale contrast-125 brightness-90"
            width={1000}
            height={1000}
            priority
          />
        </div>
      </div>
    </div>
  );
}
