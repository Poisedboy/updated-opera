import { Breakfasts } from "@/components/Breakfasts";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

const BreakfastPage = async ({
	params: { lang },
}: {
	params: { lang: Locale };
}) => {
	const { BreakfastsPage } = await getDictionary(lang);

	const description = BreakfastsPage.description;
	const breakfasts = BreakfastsPage.breakfasts;
	const childrenBreakfasts = BreakfastsPage.childrenBreakfasts;
	const buttonName = BreakfastsPage.button;
	const childrenMenuTitle = BreakfastsPage.childrenMenuTitle;
	return (
		<Breakfasts
			breakfasts={breakfasts}
			childrenBreakfasts={childrenBreakfasts}
			description={description}
			buttonName={buttonName}
			childrenMenuTitle={childrenMenuTitle}
		/>
	);
};

export default BreakfastPage;
