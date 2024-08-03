import css from "./ContactForm.module.css"


const ContactForm = ({onAddContact}) => {
	const handleSubmit = (event) => {
		event.preventDefault()
		const formElements = event.currentTarget.elements;
		const name = formElements.contactName.value;
		const number = formElements.contactNumber.value;
		const contactObj = {
			name,
			number,
		}
		onAddContact(contactObj);
		event.currentTarget.reset();
		console.log(name, number);
	}
  return (
		<form onSubmit={handleSubmit} className={css.form}>
			<p>Name</p>
			<label className={css.label}>
				<input
					type='text'
					name='contactName'
					required
				/>
			</label>
			<p>Number</p>
			<label className={css.label}>
				<input
					type='tel'
					name='contactNumber'
					required
				/>
			</label>
			<button type="submit" className={css.addContactBtn}>✌️Add contact✌️</button>
		</form>
	);
}

export default ContactForm
