'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
	{ name: 'Home', path: '/' },
	{ name: 'About', path: '/about' },
	{ name: 'Projects', path: '/projects' },
	{ name: 'Contact', path: '/contact' },
];

export default function Sidebar() {
	const pathname = usePathname();

	return (
		<div className="fixed left-0 top-0 h-screen w-64 bg-gray-900 p-6">
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
							>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
} 