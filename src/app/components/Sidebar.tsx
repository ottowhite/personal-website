'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
	name: string;
	path: string;
	isExternal?: boolean;
	icon: string;
}

const navItems: NavItem[] = [
	{ name: 'Home', path: '/', icon: '󰋜' },
	{ name: 'Links', path: '/links', icon: '󰌷' },
	{ name: 'Oversight', path: 'https://oversight-rho.vercel.app/', isExternal: true, icon: '󰖟' },
	{ name: 'Workout Planner', path: 'https://workout-planner-ivory.vercel.app/', isExternal: true, icon: '󰊓' },
];

export default function Sidebar() {
	const pathname = usePathname();

	return (
		<div className="fixed left-0 top-8 h-[calc(100vh-7rem)] w-64 bg-black border-r border-green-500/30 z-40 overflow-y-auto">
			<div className="p-4 border-b border-green-500/30">
				<div className="text-green-400 text-sm mb-2">
					<span className="text-green-500">~</span>/otto-white
				</div>
			</div>
			<nav className="p-4">
				<div className="space-y-1 font-mono text-sm">
					{/* Tree structure header */}
					<div className="text-green-500/70 mb-3">
						<span>├── </span>
						<span className="text-green-400">navigation</span>
					</div>
					{navItems.map((item, index) => {
						const isActive = pathname === item.path;
						const isLast = index === navItems.length - 1;
						const treeChar = isLast ? '└──' : '├──';

						return (
							<div key={item.path}>
								{item.isExternal ? (
									<a
										href={item.path}
										target="_blank"
										rel="noopener noreferrer"
										className={`block py-1 pl-4 transition-colors ${
											isActive
												? 'text-black bg-green-400'
												: 'text-green-400 hover:text-green-300 hover:bg-green-500/10'
										}`}
									>
										<span className="text-green-500/70">│   {treeChar} </span>
										<span>{item.icon}</span> {item.name}
										<span className="text-green-500/50 ml-1">↗</span>
									</a>
								) : (
									<Link
										href={item.path}
										className={`block py-1 pl-4 transition-colors ${
											isActive
												? 'text-black bg-green-400'
												: 'text-green-400 hover:text-green-300 hover:bg-green-500/10'
										}`}
									>
										<span className="text-green-500/70">│   {treeChar} </span>
										<span>{item.icon}</span> {item.name}
									</Link>
								)}
							</div>
						);
					})}
				</div>
			</nav>
		</div>
	);
} 