'use client';

interface LinkEntryProps {
	href: string;
	label: string;
	prefix: string;
	isExternal?: boolean;
}

const LinkEntry = ({ href, label, prefix, isExternal = false }: LinkEntryProps) => {
	const linkProps = isExternal ? {
		target: "_blank",
		rel: "noopener noreferrer"
	} : {};

	return (
		<div className="flex items-start space-x-2 font-mono">
			<span className="text-gray-400">{prefix}</span>
			<a
				href={href}
				className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-500/50 hover:decoration-cyan-300 break-all transition-colors"
				{...linkProps}
			>
				{label}
			</a>
		</div>
	);
};

export default function Links() {
	const email = 'otto.white20@imperial.ac.uk';
	const linkedinUrl = 'https://www.linkedin.com/in/otto-white/';
	const githubUrl = 'https://github.com/ottowhite';
	const youtubeUrl = 'https://www.youtube.com/@ottowhite9742';
	const cvUrl = 'https://github.com/ottowhite/cv/blob/main/build/main.pdf';
	const scholarUrl = 'https://scholar.google.com/citations?user=4R3wLJgAAAAJ&hl=en';

	return (
		<div className="flex min-h-[calc(100vh-8rem)] flex-col justify-center">
			<div className="max-w-3xl w-full space-y-8">
				<div className="mb-6">
					<span className="text-cyan-400">you@ottos-website</span>
					<span className="text-gray-400">:</span>
					<span className="text-green-400 font-bold">~</span>
					<span className="text-gray-400">$</span>{" "}
					<span className="text-gray-100">cat contact.txt</span>
				</div>

				<div>
					<h1 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
						GET IN TOUCH
					</h1>
					<p className="text-base text-gray-100 font-mono leading-relaxed mb-6">
						Feel free to reach out via any of the channels below. You can also find my CV,
						publications on Google Scholar, and presentations on my YouTube channel.
					</p>
				</div>

				<div className="border border-gray-700 p-6 space-y-4 bg-black">
					<div className="text-gray-500 text-sm mb-4 font-mono border-b border-gray-700 pb-2">
						[CONTACT_INFO]
					</div>
					<LinkEntry prefix="📧" href={`mailto:${email}`} label={email} />
					<LinkEntry prefix="💼" href={linkedinUrl} label="LinkedIn" isExternal />
					<LinkEntry prefix="🐙" href={githubUrl} label="GitHub" isExternal />
					<LinkEntry prefix="📄" href={cvUrl} label="CV" isExternal />
					<LinkEntry prefix="🎓" href={scholarUrl} label="Google Scholar" isExternal />
					<LinkEntry prefix="🎥" href={youtubeUrl} label="YouTube" isExternal />
				</div>

				<p className="text-gray-500 text-sm font-mono">
					<span className="text-gray-600">#</span> Response time: 1-2 months (24h for gold tier subscribers)
				</p>

				<div>
					<span className="text-cyan-400">you@ottos-website</span>
					<span className="text-gray-400">:</span>
					<span className="text-green-400 font-bold">~</span>
					<span className="text-gray-400">$</span>{" "}
					<span className="text-gray-500 terminal-cursor">_</span>
				</div>
			</div>
		</div>
	);
}
