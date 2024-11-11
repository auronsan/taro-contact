import { ContactList } from '@/containers/Contact/ContactList';

export default async function ContactPage() {
  return <ContactList contacts={[]} isFavorite />;
}
