"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

interface BreakfastProps {
	name: string;
	picture: string;
	ingredients: string;
	buttonName: string;
}

const BreakfastCard = ({
	name,
	picture,
	ingredients,
	buttonName,
}: BreakfastProps) => {
	return (
		<Card className="w-[300px]">
			<img
				src={picture}
				alt="breakfast"
				sizes="100%"
				width={200}
				height={200}
				className="w-full h-[225px] rounded-md object-cover mb-2"
			/>
			<CardContent className="h-[120px] flex flex-col justify-between">
				<CardTitle className="line-clamp-2">{name}</CardTitle>
				<CardDescription>
					<Dialog>
						<DialogTrigger className="border-[1px] text-black font-medium rounded-md py-2 px-4 hover:bg-gray-100">
							{buttonName}
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle className="text-center">
									{name}
								</DialogTitle>
								<DialogDescription>
									<img
										src={picture}
										alt="breakfast"
										sizes="100%"
										className="w-full h-[300px] rounded-md object-cover mb-2"
									/>
									{/* {ingredients} */}
								</DialogDescription>
							</DialogHeader>
						</DialogContent>
					</Dialog>
				</CardDescription>
			</CardContent>
		</Card>
	);
};

export default BreakfastCard;
