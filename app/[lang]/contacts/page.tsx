import { Contacts } from "@/components/Contacts";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

const ContactsPage = async ({
	params: { lang },
}: {
	params: { lang: Locale };
}) => {
	const { ContactsPage } = await getDictionary(lang);
	const title = ContactsPage.title;
	const address = ContactsPage.address;
	return <Contacts title={title} address={address} />;
};

export default ContactsPage;
