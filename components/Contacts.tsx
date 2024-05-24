import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

type ContactsProps = {
	address: string;
	title: string;
	numberPhoneText: string;
	socialNetworksText: string;
	emailText: string;
};

export const Contacts = ({
	address,
	title,
	numberPhoneText,
	socialNetworksText,
	emailText,
}: ContactsProps) => {
	return (
		<>
			<Card className="m-10">
				<CardTitle className="p-5 text-center font-thin uppercase">
					{title}
				</CardTitle>
				<hr></hr>
				<CardContent className="p-5 flex justify-around flex-wrap gap-5">
					<div>
						<span>{numberPhoneText}: </span>
						<div className="flex flex-col">
							<a href="tel: +38 063 649 68 86">+38 063 649 68 86</a>
							<a href="tel: +38 097 826 22 85">+38 097 826 22 85</a>
							<a href="tel: +38 050 506 05 03">+38 050 506 05 03</a>
						</div>
					</div>
					<div className="flex flex-col gap-3">
						<span className="flex gap-5">
							{emailText}:{" "}
							<a href="mailto: op.aparthotel@gmail.com">
								<FiMail size={30} />
							</a>
						</span>
						<span className="flex gap-3">
							{socialNetworksText}:{" "}
							<Link href="https://www.instagram.com/op.apart_hotel/">
								<BsInstagram size={30} />
							</Link>
						</span>
					</div>
				</CardContent>
			</Card>
			<CardTitle className="text-center mb-10">{address}</CardTitle>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.9280436805798!2d24.02469424944527!3d49.841727327872455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add726ae40001%3A0x1e862664d860a4c2!2sOpera%20Passage%20Apart%20Hotel!5e0!3m2!1suk!2sua!4v1678992846762!5m2!1suk!2sua"
				title="Opera Passage"
				style={{ width: "100%", height: "75vh" }}
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"></iframe>
		</>
	);
};
