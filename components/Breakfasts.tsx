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
};

export const Breakfasts = ({
	childrenBreakfasts,
	breakfasts,
	description,
	buttonName,
	childrenMenuTitle,
}: BreakfastsProps) => {
	return (
		<div className="mx-10 mt-10">
			<Card className="p-10 mb-10 flex items-center justify-center flex-col gap-10">
				<CardTitle className="uppercase font-thin">
					A la Carte
				</CardTitle>
				<CardContent>{description}</CardContent>
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
					<CardTitle>{childrenMenuTitle}</CardTitle>
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
