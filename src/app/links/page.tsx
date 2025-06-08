'use client';

import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import {
	DocumentTextIcon as DocumentTextIconSolid,
	UserGroupIcon as UserGroupIconSolid,
} from '@heroicons/react/24/solid';
import { FaYoutube, FaGithub } from 'react-icons/fa';

export default function Links() {
	const email = 'otto.white20@imperial.ac.uk';
	const phone = '+44 7462 003706';
	const linkedinUrl = 'https://www.linkedin.com/in/otto-white/';
	const githubUrl = 'https://github.com/ottowhite';
	const youtubeUrl = 'https://www.youtube.com/@ottowhite9742';
	const cvUrl = 'https://github.com/ottowhite/cv/blob/main/build/main.pdf';

	return (
		<div className="flex min-h-[calc(100vh-4rem)] flex-col items-start justify-center px-4">
			<div className="max-w-2xl w-full space-y-8">
				<div>
					<h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
					<p className="text-lg text-gray-400">
						Feel free to reach out to me via email or connect with me on social media
					</p>
				</div>

				<div className="bg-gray-900/50 rounded-lg p-8 shadow-lg space-y-6">
					<div className="flex items-center space-x-4">
						<EnvelopeIcon className="h-8 w-8 text-gray-400" />
						<a
							href={`mailto:${email}`}
							className="text-xl text-gray-300 hover:text-white transition-colors"
						>
							{email}
						</a>
					</div>

					<div className="flex items-center space-x-4">
						<PhoneIcon className="h-8 w-8 text-gray-400" />
						<a
							href={`tel:${phone}`}
							className="text-xl text-gray-300 hover:text-white transition-colors"
						>
							{phone}
						</a>
					</div>

					<div className="flex items-center space-x-4">
						<UserGroupIconSolid className="h-8 w-8 text-gray-400" />
						<a
							href={linkedinUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-xl text-gray-300 hover:text-white transition-colors"
						>
							LinkedIn
						</a>
					</div>

					<div className="flex items-center space-x-4">
						<FaGithub className="h-8 w-8 text-gray-400" />
						<a
							href={githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-xl text-gray-300 hover:text-white transition-colors"
						>
							GitHub
						</a>
					</div>

					<div className="flex items-center space-x-4">
						<DocumentTextIconSolid className="h-8 w-8 text-gray-400" />
						<a
							href={cvUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-xl text-gray-300 hover:text-white transition-colors"
						>
							CV
						</a>
					</div>

					<div className="flex items-center space-x-4">
						<FaYoutube className="h-8 w-8 text-gray-400" />
						<a
							href={youtubeUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-xl text-gray-300 hover:text-white transition-colors"
						>
							YouTube
						</a>
					</div>
				</div>

				<p className="text-gray-500 text-sm">
					I typically respond within 1-2 months, apart from my gold tier email
					subscription list, in which I will respond within 24 hours.
				</p>
			</div>
		</div>
	);
}
