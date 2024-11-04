import { Container } from '@/components/Container';
import { ContactList } from '@/containers/Contact/ContactList';
import { getListContacts } from '@/services/contacts';

export default async function ContactPage() {
  const contacts = await getListContacts();
  return (
    <Container fluid>
      <ContactList contacts={contacts} />
    </Container>
  );
}
