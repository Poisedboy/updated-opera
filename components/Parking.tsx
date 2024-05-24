import { Card } from "@/components/ui/card";
import { Metadata } from "next";

const mapsLink = [
	{
		address: "Січових Стрільців 1",
		title: "Parking 2",
		link: "https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d3812.640241694649!2d24.026442!3d49.841901!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x473adde236f2378b%3A0xcb30ce1509fd7447!2z0J_QsNGA0LrQvtCy0LrQsCAyLCDQstGD0LvQuNGG0Y8g0KHRltGH0L7QstC40YUg0KHRgtGA0ZbQu9GM0YbRltCyLCAxLCDQm9GM0LLRltCyLCDQm9GM0LLRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDc5MDAw!3m2!1d49.8412082!2d24.0256424!4m5!1s0x473add726ae40001%3A0x1e862664d860a4c2!2zT3BlcmEgUGFzc2FnZSBBcGFydCBIb3RlbCwg0L_RgNC-0YHQv9C10LrRgiDQodCy0L7QsdC-0LTQuCwgMjcsINCb0YzQstGW0LIsINCb0YzQstGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNzkwMDA!3m2!1d49.842183899999995!2d24.0264719!5e1!3m2!1suk!2sua!4v1679348207492!5m2!1suk!2sua",
	},
	{
		address: "Городоцька 23",
		title: "Horodotska 23",
		link: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2176.2452771470435!2d24.023437008559767!3d49.842814038728584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x473add73be38e81f%3A0x5169aa9082e93fb4!2z0LLRg9C70LjRhtGPINCT0L7RgNC-0LTQvtGG0YzQutCwLCAyMywg0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGM!3m2!1d49.8430928!2d24.022865499999998!4m5!1s0x0%3A0x1e862664d860a4c2!2sOpera%20Passage%20Apart%20Hotel!3m2!1d49.842183899999995!2d24.0264719!5e1!3m2!1suk!2sua!4v1679352553530!5m2!1suk!2sua",
	},
	{
		address: "Площа Підкова 1",
		title: "Ploshcha Pidkovy",
		link: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d280.2938115310446!2d24.02842901500319!3d49.84138889432052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x473add6decf273a7%3A0xc259df33cd859d00!2z0J_QsNGA0LrQvtCy0LrQsCDQvdCwINC_0LsuINCf0ZbQtNC60L7QstC4LCAx!3m2!1d49.8413688!2d24.029111999999998!4m5!1s0x0%3A0x1e862664d860a4c2!2sOpera%20Passage%20Apart%20Hotel!3m2!1d49.842183899999995!2d24.0264719!5e1!3m2!1suk!2sua!4v1679353067577!5m2!1suk!2sua",
	},
];

interface Imap {
	address: string;
	title: string;
	link: string;
}

type ParkingProps = {
	mapsLinks: Imap[];
	title: string;
};

const Parking = ({ mapsLinks, title }: ParkingProps) => {
	return (
		<div className="min-h-screen px-10 flex flex-col items-center">
			<h2 className="text-canter m-10">{title}</h2>
			<div className="flex flex-wrap justify-center gap-5">
				{mapsLinks.map((map) => (
					<Card
						className="my-5 p-5 w-[320px] flex flex-col justify-center items-center"
						key={map.title}>
						<p className="text-center">{map.address}</p>
						<iframe
							src={map.link}
							title={map.title}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"></iframe>
					</Card>
				))}
			</div>
		</div>
	);
};

export default Parking;
