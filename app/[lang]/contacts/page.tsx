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
	const numberPhoneText = ContactsPage.numberPhoneText;
	const socialNetworksText = ContactsPage.socialNetworksText;
	const emailText = ContactsPage.emailText;

	return (
		<Contacts
			title={title}
			address={address}
			numberPhoneText={numberPhoneText}
			socialNetworksText={socialNetworksText}
			emailText={emailText}
		/>
	);
};

export default ContactsPage;
