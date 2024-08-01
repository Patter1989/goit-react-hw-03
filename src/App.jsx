// import { useState, useEffect } from "react";
// import Section from "./components/Section/Section.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx"
// import Notification from "./components/Notification/Notification.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import contacts from "./Contacts.json"



const App = () => {
	
	
	return (
		<div>
			<h1>Phonebook</h1>
				<ContactForm />
				<SearchBox />
				<ContactList
					contacts={contacts} />
		</div>
	);
};

export default App;



