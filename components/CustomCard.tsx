"use client";
import * as React from "react";

import {
	Card,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import Image from "next/image";

interface CardProps {
	title: string;
	text: string;
	image: string;
	buttonName: string;
}

const CustomCard = ({
	title,
	text,
	image,
	buttonName,
}: CardProps) => {
	return (
		<Card className="flex flex-col justify-between my-5 w-[250px]">
			<img
				src={image}
				alt="sign"
				className="bg-white rounded-md p-5"
			/>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardFooter>
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline">{buttonName}</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle className="text-center">
								{title}
							</DialogTitle>
						</DialogHeader>
						{text}
					</DialogContent>
				</Dialog>
			</CardFooter>
		</Card>
	);
};

export default CustomCard;
