import ContactItem from "./ContactItem/ContactItem";

const ContactList = ({ List, onChangeStatus, onDeleteContact, onGetCurrentContact }) => {

  const item = List.map(elem => {
    return (<ContactItem key={elem.Id}
      {...elem}
      onChangeStatus={() => onChangeStatus(elem.Id, elem.Status)}
      onDeleteContact={() => onDeleteContact(elem.Id)}
      onGetCurrentContact={() => onGetCurrentContact(elem.Id)} />)
  })


  return (
    item.length > 0 ? item : <p className="emptyList">Contact list is empty</p>
  )




}

export default ContactList;