import { Link } from "react-router-dom"

const ContactItem = ({ Name, Image, PhoneNumber, Email, Gender, Status, onChangeStatus, onDeleteContact, onGetCurrentContact }) => {
    let statusClases;
    switch (Status) {
        case 'Work':
            statusClases = "lab lab-success"
            break;
        case 'Family':
            statusClases = "lab lab-primary"
            break;
        case 'Private':
            statusClases = "lab lab-danger"
            break;
        case 'Friend':
            statusClases = "lab lab-warning"
            break;
        default:
            statusClases = "lab"
            break;
    }

    const imageURL = `https://api.randomuser.me/portraits/${Gender}/${Image}.jpg`

    return (
        <div className="unit">
            <div className="field name">
                {/* <div className="check">
                    <input name="cb1" type="checkbox" />
                    <label htmlFor="cb2"></label>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>
                </div> */}
                <div>
                    <img src={imageURL} alt="Avatar" className="avatar" /> {Name}
                </div>

                <div className={statusClases} onClick={onChangeStatus}>{Status}</div>


            </div>
            <div className="field phone">
                {PhoneNumber}
            </div>
            <div className="field email">
                {Email}
            </div>
            <div className=" icons">
                <Link to="/edit-contact" ><i className="fas fa-pencil-alt fa-lg" onClick={onGetCurrentContact} ></i></Link>

                <i className="far fa-trash-alt fa-lg" onClick={onDeleteContact}></i>
            </div>
        </div>
    )
}

export default ContactItem;