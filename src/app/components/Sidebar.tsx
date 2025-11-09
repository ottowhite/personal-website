'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavItem {
	name: string;
	path: string;
	isExternal?: boolean;
}

const navItems: NavItem[] = [
	{ name: 'Home', path: '/' },
	{ name: 'Links', path: '/links' },
	{ name: 'Oversight', path: 'https://oversight-rho.vercel.app/', isExternal: true },
	{ name: 'Workout Planner', path: 'https://workout-planner-ivory.vercel.app/', isExternal: true },
];

export default function Sidebar() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{/* Menu button - always visible */}
			<button
				className="p-2 rounded-lg hover:bg-gray-700"
				onClick={() => setIsOpen(!isOpen)}
			>
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					{isOpen ? (
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					) : (
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					)}
				</svg>
			</button>

			{/* Sidebar - always collapsed by default */}
			<div
				className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-gray-900/95 p-6 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
					} w-64 z-40`}
			>
				<nav>
					<ul className="space-y-2">
						{navItems.map((item) => (
							<li key={item.path}>
								{item.isExternal ? (
									<a
										href={item.path}
										target="_blank"
										rel="noopener noreferrer"
										className="block rounded-lg px-4 py-2 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
										onClick={() => setIsOpen(false)}
									>
										{item.name}
									</a>
								) : (
									<Link
										href={item.path}
										className={`block rounded-lg px-4 py-2 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white ${pathname === item.path ? 'bg-gray-800 text-white' : ''
											}`}
										onClick={() => setIsOpen(false)}
									>
										{item.name}
									</Link>
								)}
							</li>
						))}
					</ul>
				</nav>
			</div>
		</>
	);
} 