'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface TreeNode {
	name: string;
	type: 'file' | 'folder';
	path?: string;
	isExternal?: boolean;
	children?: TreeNode[];
	icon?: string;
}

const fileTree: TreeNode[] = [
	{ name: 'Home', type: 'file', path: '/', icon: '' },
	{ name: 'Links', type: 'file', path: '/links', icon: '' },
	{
		name: 'Side Projects',
		type: 'folder',
		children: [
			{ name: 'Oversight', type: 'file', path: 'https://oversight-rho.vercel.app/', isExternal: true, icon: '↗' },
			{ name: 'Workout Planner', type: 'file', path: 'https://workout-planner-ivory.vercel.app/', isExternal: true, icon: '↗' },
		],
	},
];

interface TreeItemProps {
	node: TreeNode;
	depth: number;
	isLast: boolean;
	parentPrefix: string;
}

function TreeItem({ node, depth, isLast, parentPrefix }: TreeItemProps) {
	const [isExpanded, setIsExpanded] = useState(true); // Expand all folders by default
	const pathname = usePathname();

	const isActive = node.path && pathname === node.path;
	const currentPrefix = parentPrefix + (isLast ? '  ' : '│ ');
	const treeChar = isLast ? '└─' : '├─';

	if (node.type === 'folder') {
		return (
			<div>
				<div
					className={`flex items-center py-0.5 px-2 cursor-pointer select-none transition-colors hover:bg-gray-800/50 ${
						isActive ? 'bg-gray-700' : ''
					}`}
					onClick={() => setIsExpanded(!isExpanded)}
				>
					<span className="text-gray-600">{parentPrefix}{treeChar}</span>
					<span className="text-blue-400 mx-1">
						{isExpanded ? '' : ''}
					</span>
					<span className="text-blue-300">{node.name}</span>
					<span className="text-gray-600 mx-1">/</span>
				</div>
				{isExpanded && node.children && (
					<div>
						{node.children.map((child, index) => (
							<TreeItem
								key={child.name}
								node={child}
								depth={depth + 1}
								isLast={index === node.children!.length - 1}
								parentPrefix={currentPrefix}
							/>
						))}
					</div>
				)}
			</div>
		);
	}

	// File node
	const content = (
		<>
			<span className="text-gray-600">{parentPrefix}{treeChar}</span>
			<span className="text-gray-400 mx-1">{node.icon || ''}</span>
			<span className={`${
				node.name.endsWith('.tsx') || node.name.endsWith('.ts') ? 'text-blue-300' :
				node.name.endsWith('.css') ? 'text-purple-300' :
				node.name.endsWith('.json') ? 'text-yellow-300' :
				node.name.endsWith('.md') ? 'text-gray-300' :
				node.name.endsWith('.jpg') || node.name.endsWith('.png') ? 'text-purple-400' :
				'text-gray-300'
			}`}>
				{node.name}
			</span>
		</>
	);

	if (node.path) {
		if (node.isExternal) {
			return (
				<a
					href={node.path}
					target="_blank"
					rel="noopener noreferrer"
					className={`flex items-center py-0.5 px-2 transition-colors hover:bg-gray-800/50 ${
						isActive ? 'bg-gray-700' : ''
					}`}
				>
					{content}
				</a>
			);
		}
		return (
			<Link
				href={node.path}
				className={`flex items-center py-0.5 px-2 transition-colors hover:bg-gray-800/50 ${
					isActive ? 'bg-gray-700' : ''
				}`}
			>
				{content}
			</Link>
		);
	}

	return (
		<div className="flex items-center py-0.5 px-2 text-gray-400">
			{content}
		</div>
	);
}

export default function Sidebar() {
	return (
		<div className="fixed left-0 top-0 h-[calc(100vh-1.5rem)] w-64 bg-gray-950 border-r border-gray-800 z-40 overflow-y-auto">
			<nav className="p-3">
				<div className="font-mono text-xs leading-relaxed">
					{/* Root indicator */}
					<div className="text-gray-500 mb-1 px-2">
						<span className="text-blue-400">~</span>
						<span className="text-gray-600">/</span>
						<span className="text-blue-300">website</span>
					</div>

					{/* File tree */}
					{fileTree.map((node, index) => (
						<TreeItem
							key={node.name}
							node={node}
							depth={0}
							isLast={index === fileTree.length - 1}
							parentPrefix=""
						/>
					))}
				</div>
			</nav>
		</div>
	);
} 