import { useState, useEffect } from "react";
// import Section from "./components/Section/Section.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx"
// import Notification from "./components/Notification/Notification.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import contacts from "./Contacts.json"
import { nanoid } from "nanoid";



const App = () => {
	const [users, setUsers ] = useState(contacts)
	const onAddContact = (contact) => {
		const finalContact = {
			...contact,
			id: nanoid(),
		}

		setUsers([finalContact, ...contacts,]);
		console.log(finalContact, contact);
	}
	return (
		<div>
			<h1>Phonebook</h1>
			<ContactForm
				onAddContact={onAddContact} />
				<SearchBox />
				<ContactList
					contacts={users} />
		</div>
	);
};

export default App;



