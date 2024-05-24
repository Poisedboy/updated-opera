import CustomCard from "./CustomCard";

const info = [
	{
		id: 1,
		picture: "/check-in.png",
		title: "Заїзд після 14:00",
		text: 'Якщо Ви приїхали раніше. Ви можете залишити речі в нашій камері схову до Вашого заселення. За наявності прибраного номера Ви можете скористатись послугою "Ранній заїзд", вона коштує половину вартості номера за добу. Ціну уточнюйте на рецепції.',
	},
	{
		id: 2,
		picture: "/check-out.png",
		title: "Виїзд до 12:00",
		text: 'Ви можете залишити речі в нашій камері схову, або придбати послугу "Пізній виїзд", вартість послуги складає половину вартості номера за добу.',
	},
	{
		id: 3,
		picture: "/room-service.png",
		title: "Щоденне прибирання",
		text: "Повісьте табличку «Прошу прибрати» на ручку дверей до 13:00 – 14:00.",
	},
	{
		id: 4,
		picture: "/warning.png",
		title: "Повітряна тривога",
		text: "На випадок повітряної тривоги у нас є укриття на -1 поверсі.",
	},
	{
		id: 5,
		picture: "/restricted.png",
		title: "Комендантська година",
		text: "У Львові діє комендантська година, з 00:00 до 05:00. Ходити по вулицях Львова заборонено!",
	},
];

interface IinfoItem {
	id: number;
	picture: string;
	title: string;
	text: string;
}

type InformationProps = {
	info: IinfoItem[];
	buttonName: string;
};

const Information = ({ info, buttonName }: InformationProps) => {
	return (
		<>
			<div className="flex gap-3 flex-wrap justify-center">
				{info.map((info) => (
					<CustomCard
						key={info.id}
						title={info.title}
						image={info.picture}
						text={info.text}
						buttonName={buttonName}
					/>
				))}
			</div>
		</>
	);
};

export default Information;
