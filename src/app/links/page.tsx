'use client';

import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import {
	DocumentTextIcon as DocumentTextIconSolid,
	UserGroupIcon as UserGroupIconSolid,
} from '@heroicons/react/24/solid';
import { FaYoutube, FaGithub } from 'react-icons/fa';
import { FaGoogleScholar } from 'react-icons/fa6';

type IconType = 'email' | 'phone' | 'linkedin' | 'github' | 'cv' | 'scholar' | 'youtube';

interface LinkEntryProps {
	type: IconType;
	href: string;
	label: string;
	isExternal?: boolean;
}

const getIcon = (type: IconType) => {
	const iconClass = "h-10 w-10 md:h-8 md:w-8 text-gray-400";

	switch (type) {
		case 'email':
			return <EnvelopeIcon className={iconClass} />;
		case 'phone':
			return <PhoneIcon className={iconClass} />;
		case 'linkedin':
			return <UserGroupIconSolid className={iconClass} />;
		case 'github':
			return <FaGithub className={iconClass} />;
		case 'cv':
			return <DocumentTextIconSolid className={iconClass} />;
		case 'scholar':
			return <FaGoogleScholar className={iconClass} />;
		case 'youtube':
			return <FaYoutube className={iconClass} />;
	}
};

const LinkEntry = ({ type, href, label, isExternal = false }: LinkEntryProps) => {
	const linkProps = isExternal ? {
		target: "_blank",
		rel: "noopener noreferrer"
	} : {};

	return (
		<div className="flex items-center space-x-4">
			{getIcon(type)}
			<a
				href={href}
				className="text-xl text-gray-300 hover:text-white transition-colors break-all"
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
		<div className="flex min-h-[calc(100vh-4rem)] flex-col items-start justify-center px-4">
			<div className="max-w-2xl w-full space-y-8">
				<div>
					<h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
					<p className="text-lg text-gray-400">
						Feel free to reach out to me via email, phone, or connect with me on social media. You can also find my CV below, my publications on Google Scholar, and my presentations on my YouTube channel.
					</p>
				</div>

				<div className="bg-gray-900/50 rounded-lg p-8 shadow-lg space-y-6">
					<LinkEntry type="email" href={`mailto:${email}`} label={email} />
					<LinkEntry type="linkedin" href={linkedinUrl} label="LinkedIn" isExternal />
					<LinkEntry type="github" href={githubUrl} label="GitHub" isExternal />
					<LinkEntry type="cv" href={cvUrl} label="CV" isExternal />
					<LinkEntry type="scholar" href={scholarUrl} label="Google Scholar" isExternal />
					<LinkEntry type="youtube" href={youtubeUrl} label="YouTube" isExternal />
				</div>

				<p className="text-gray-500 text-sm">
					I typically respond within 1-2 months, apart from my gold tier email
					subscription list, in which I will respond within 24 hours.
				</p>
			</div>
		</div>
	);
}
