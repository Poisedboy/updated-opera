"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import BreakfastCard from "./BreakfastCard";

type Breakfasts = {
	id: number;
	name: string;
	picture: string;
	ingredients: string;
};

type BreakfastsProps = {
	childrenBreakfasts: Breakfasts[];
	breakfasts: Breakfasts[];
	description?: string;
	buttonName: string;
	childrenMenuTitle: string;
	commonInfo: string;
	breakfastInfo: string;
};

export const Breakfasts = ({
	childrenBreakfasts,
	breakfasts,
	description,
	buttonName,
	childrenMenuTitle,
	breakfastInfo,
	commonInfo,
}: BreakfastsProps) => {
	const boldPart = breakfastInfo.split(":")[0];
	const optionsPart = breakfastInfo.split(":")[1];
	return (
		<div className="mx-10 mt-10">
			<Card className="p-4 sm:p-10 mb-10 flex items-center justify-center flex-col gap-10">
				<CardTitle className="uppercase font-thin">
					A la Carte
				</CardTitle>
				<CardContent className="text-xs sm:text-base">
					<p>{commonInfo}</p>
					<div className="mt-3">
						<span className="font-semibold">{boldPart}</span>
						{": "}
						<span>{optionsPart}</span>
					</div>
				</CardContent>
			</Card>
			<div className="pb-10 flex gap-5 flex-wrap justify-center">
				{breakfasts.map((breakfast) => (
					<BreakfastCard
						key={breakfast.id}
						name={breakfast.name}
						picture={breakfast.picture}
						ingredients={breakfast.ingredients}
						buttonName={buttonName}
					/>
				))}
			</div>
			<div>
				<Card className="p-10 mb-10 flex items-center justify-center flex-col gap-10">
					<CardTitle className="uppercase font-thin">
						{childrenMenuTitle}
					</CardTitle>
				</Card>
				<div className="pb-10 flex gap-5 flex-wrap justify-center">
					{childrenBreakfasts.map((breakfast) => (
						<BreakfastCard
							key={breakfast.id}
							name={breakfast.name}
							picture={breakfast.picture}
							ingredients={breakfast.ingredients}
							buttonName={buttonName}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
