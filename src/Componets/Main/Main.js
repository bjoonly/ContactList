
import { Fragment } from "react"
import ContactList from "../ContactList/ContactList"
import MainSearch from "./MainSearch/MainSearch"
import SideBar from "../SideBar/SideBar"
import { Link } from "react-router-dom"



const Main = ({ List, onChangeStatus, onDeleteContact, onGetCurrentContact }) => {

  let CalculateCountOfStatus = (Status) => {
    const tmpList = List.slice();
    const filtered = tmpList.filter(contact => contact.Status === Status)
    return filtered.length
  }
  return (
    <Fragment>
      <SideBar
        CountContacts={List.length}
        WorkCount={CalculateCountOfStatus("Work")}
        FamilyCount={CalculateCountOfStatus("Family")}
        PrivateCount={CalculateCountOfStatus("Private")}
        FriendCount={CalculateCountOfStatus("Friend")} />
      <div className="col-lg-9 col-md-8 col-sm-12 pr-0">
        <div className="contacts-list py-3 ">
          <div className="row py-4 pl-3 pr-5">
            <h5 className="title">Contact List</h5>
            <Link to="/add-new-contact" className="title ml-auto">Add new contact</Link>
          </div>
          <form className="ac-custom ac-checkbox ac-checkmark" autoComplete="off">
            <MainSearch />

            <div className="unit head">
              <div className="field name">
                {/* <div className="check">
                  <input name="cb1" type="checkbox" />
                  <label htmlFor="cb1"></label>
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg></div> */}
                Name
              </div>
              <div className="field phone">
                Phone
              </div>
              <div className="field email icons">
                Email
                {/* <div className="btn-group pull-right" role="group">
                <button type="button" className="btn btn-default"><span className="icon icon-folder"></span></button>
                
                <div className="btn-group " role="group">
                <button type="button" className="btn btn-default dropdown-toggle " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="icon icon-label"></span></button>
                
                <ul className="dropdown-menu pull-right">
                <li><a href="#"><span className="label label-success text-dark">New</span></a></li>
                <li><a href="#"><span className="label label-primary text-dark">Social</span></a></li>
                <li><a href="#"><span className="label label-warning text-dark">Spam</span></a></li>
                </ul>
                </div>
                <button type="button" className="btn btn-default"><span className="icon icon-trash"></span></button>
              </div> */}

              </div>
              <div className="field">

              </div>
            </div>
            <ContactList List={List} onChangeStatus={onChangeStatus} onDeleteContact={onDeleteContact} onGetCurrentContact={onGetCurrentContact} />
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default Main;