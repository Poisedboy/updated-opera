"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n } from "@/i18n.config";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export const LocaleSwitcher = () => {
	const pathname = usePathname();

	const redirectedPathName = (locale: string) => {
		if (!pathname) return "/";
		let segments = pathname.split("/");
		segments[1] = locale;
		return segments.join("/");
	};
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					{pathname.split("/")[1] === "en" && (
						<Image
							src="/en.png"
							height={200}
							className="h-[1.3rem] w-[1.3rem]"
							width={200}
							alt="en"
						/>
					)}
					{pathname.split("/")[1] === "ua" && (
						<Image
							src="/ua.png"
							height={200}
							className="h-[1.3rem] w-[1.3rem]"
							width={200}
							alt="en"
						/>
					)}
					<span className="sr-only">Toggle Language</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem>
					<Link href={redirectedPathName(i18n.locales[0])}>
						{i18n.locales[0].toLocaleUpperCase()}
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link href={redirectedPathName(i18n.locales[1])}>
						{i18n.locales[1].toLocaleUpperCase()}
					</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
