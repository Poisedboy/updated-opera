"use client";
import React, { useState } from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	Link,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { usePathname } from "next/navigation";
import { Locale } from "@/i18n.config";
import { LocaleSwitcher } from "./LocaleSwitcher";

interface ILink {
	id: number;
	name: string;
	link: string;
}

type NavigationProps = { lang: Locale; links: ILink[] };

const Navigation = ({ lang, links }: NavigationProps) => {
	const path = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<Navbar
			isBordered
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}>
			<NavbarBrand>
				<p className="font-bold uppercase text-inherit">
					Opera Passage
				</p>
			</NavbarBrand>
			<NavbarContent className="sm:hidden" justify="end">
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				/>
			</NavbarContent>
			<NavbarContent
				className="hidden sm:flex gap-4"
				justify="center">
				{links.map((link) => (
					<Link
						key={link.id}
						className={`${
							path === link.link
								? "text-blue-600 border-b-[0.5px] border-b-blue-600"
								: "text-gray-950 dark:text-white"
						} font-thin`}
						href={link.link}>
						{link.name.toLocaleUpperCase()}
					</Link>
				))}
				<ThemeSwitcher />
				<LocaleSwitcher />
			</NavbarContent>
			<NavbarMenu>
				<div className="flex justify-between">
					<div>
						{links.map((link, index) => (
							<NavbarMenuItem key={`${link.name}-${index}`}>
								<Link
									className="w-full"
									color={
										link.link === path ? "success" : "foreground"
									}
									href={link.link}
									size="lg">
									{link.name}
								</Link>
							</NavbarMenuItem>
						))}
					</div>
					<div className="flex flex-col gap-5">
						<ThemeSwitcher />
						<LocaleSwitcher />
					</div>
				</div>
			</NavbarMenu>
		</Navbar>
	);
};

export default Navigation;
