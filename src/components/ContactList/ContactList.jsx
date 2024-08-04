// import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";


const ContactList = ({ filteredContacts, onDeleteContact }) => {
	return (
		<ul>
			{filteredContacts.map((contact) => (
				<Contact
					key={contact.id}
					id={contact.id}
					name={contact.name}
					number={contact.number}
					onDeleteContact={onDeleteContact}
				/>
			))}
		</ul>
	);
};
export default ContactList;

