'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
	{ name: 'Home', path: '/' },
	{ name: 'About', path: '/about' },
	{ name: 'Projects', path: '/projects' },
	{ name: 'Contact', path: '/contact' },
];

export default function Sidebar() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{/* Mobile menu button */}
			<button
				className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700"
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

			{/* Sidebar */}
			<div
				className={`fixed left-0 top-0 h-screen bg-gray-900/95 p-6 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
					} md:translate-x-0 w-64 z-40`}
			>
				<div className="mb-8">
					<h1 className="text-2xl font-bold text-white">Otto White</h1>
				</div>
				<nav>
					<ul className="space-y-2">
						{navItems.map((item) => (
							<li key={item.path}>
								<Link
									href={item.path}
									className={`block rounded-lg px-4 py-2 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white ${pathname === item.path ? 'bg-gray-800 text-white' : ''
										}`}
									onClick={() => setIsOpen(false)}
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</>
	);
} 