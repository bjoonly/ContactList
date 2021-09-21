import SideBarSearch from "./SideBarSearch/SideBarSearch"

const SideBar = ({ CountContacts, WorkCount, FamilyCount, PrivateCount, FriendCount }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-12">
      <div className="contacts-labels">
        <div className="title">All contacts: <span> {CountContacts} </span></div>
        <div className="list">
          <div className="input-group">
            <SideBarSearch />
          </div>
          <div className="head">Labels</div>
          <div className="unit">
            <div className="lab lab-success">Work</div><span>{WorkCount}</span>
          </div>
          <div className="unit">
            <div className="lab lab-primary">Family</div><span>{FamilyCount}</span>
          </div>
          <div className="unit">
            <div className="lab lab-danger">Private</div><span>{PrivateCount}</span>
          </div>
          <div className="unit">
            <div className="lab lab-warning">Friends</div><span>{FriendCount}</span>
          </div>
          <button type="button" className="btn btn-primary font-weight-700">Add new label</button>
        </div>
      </div>
    </div>
  )
}

export default SideBar;