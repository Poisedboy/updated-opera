"use client";
import React, { useState } from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { usePathname } from "next/navigation";

const links = [
	{ id: 1, name: "Головна", link: "/" },
	{ id: 2, name: "Сніданки", link: "/breakfasts" },
	{ id: 3, name: "Контакти", link: "/contacts" },
	{ id: 4, name: "Паркінг", link: "/parking" },
];

const Navigation = () => {
	const path = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	console.log("JSS log Navigation :", path);
	return (
		<Navbar
			isBordered
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}>
			<NavbarBrand>
				<p className="font-bold text-inherit">Opera Passage</p>
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
						color={path === link.link ? "success" : "foreground"}
						href={link.link}>
						{link.name}
					</Link>
				))}
				<ThemeSwitcher />
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
					<span className="">
						<ThemeSwitcher />
					</span>
				</div>
			</NavbarMenu>
		</Navbar>
	);
};

export default Navigation;
