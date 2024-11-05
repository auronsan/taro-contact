import { ContactList } from '@/containers/Contact/ContactList';
import { getListContacts } from '@/services/contacts';

export default async function ContactPage() {
  const contacts = await getListContacts();
  return (
    <>
      <ContactList contacts={contacts} isFavorite />
    </>
  );
}
