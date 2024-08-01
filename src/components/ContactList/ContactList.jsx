// import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";


const ContactList = ({ contacts, deleteContact }) => {
	return (
		<ul>
			{contacts.map((contact) => (
				<Contact
					key={contact.id}
					id={contact.id}
					name={contact.name}
					number={contact.number}
					deleteContact={deleteContact}
				/>
			))}
		</ul>
	);
};
export default ContactList;

