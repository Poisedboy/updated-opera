import { getDictionary } from "@/lib/dictionary";
import Banner from "../../components/Banner";
import Information from "../../components/Information";
import { Locale } from "../../i18n.config";

export default async function Home({
	params: { lang },
}: {
	params: { lang: Locale };
}) {
	const { HomePage } = await getDictionary(lang);
	const info = HomePage.info;
	const buttonName = HomePage.buttonName;
	return (
		<main className="flex flex-col items-center justify-between">
			<Banner />
			<Information info={info} buttonName={buttonName} />
		</main>
	);
}
