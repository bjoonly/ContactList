
import ReactDOM from "react-dom"
import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { v4 as uuidv4 } from 'uuid';

//Import styles
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

//Import components
import Main from "./Componets/Main/Main";
import AddContact from "./Componets/AddContact/AddContact"
import EditContact from "./Componets/EditContact/EditContact"
import NotFound from "./Componets/NotFound/NotFound"
import APIService from "./Services/APIService"


class App extends Component {
  //


  state = {
    // ContactList: [
    //   {
    //     Id: uuidv4(),
    //     Name: "Alexander Verdnam",
    //     Image: 5,
    //     PhoneNumber: "+1-800-600-9898",
    //     Email: "example@gmail.com",
    //     Gender: "men",
    //     Status: "Friend"
    //   },
    //   {
    //     Id: uuidv4(),
    //     Name: "Gerard Butler",
    //     Image: 82,
    //     PhoneNumber: "+1-800-480-9348",
    //     Email: "gb@gmail.com",
    //     Gender: "men",
    //     Status: "Work"
    //   },
    //   {
    //     Id: uuidv4(),
    //     Name: "Anna Lee",
    //     Image: 43,
    //     PhoneNumber: "+1-800-091-1234",
    //     Email: "lee@gmail.com",
    //     Gender: "women",
    //     Status: "Private"
    //   }
    // ],
    ContactList: [],
    CurrentContact: ""
  }

  componentDidMount() {
    APIService.fetchContactList()
      .then(data => this.setState({ ContactList: data.List }));

  }


  onCreateContact = (Contact) => {

    const tmpList = this.state.ContactList.slice();
    tmpList.push(Contact)
    this.setState({ ContactList: tmpList })

    APIService.updateDatabase(tmpList)
  }

  onDeleteContact = (Id) => {
    const index = this.state.ContactList.findIndex(elem => elem.Id === Id)

    const tmpList = this.state.ContactList.slice();
    tmpList.splice(index, 1)

    this.setState({ ContactList: tmpList })

    APIService.updateDatabase(tmpList)

  }

  onChangeStatus = (Id) => {

    const index = this.state.ContactList.findIndex(elem => elem.Id === Id)
    let contact = this.state.ContactList[index];
    switch (contact.Status) {
      case 'Work':
        contact.Status = "Family"
        break;
      case 'Family':
        contact.Status = "Private"
        break;
      case 'Private':
        contact.Status = "Friend"
        break;
      case 'Friend':
        contact.Status = "Work"
        break;
      default:
        break;
    }

    const tmpList = this.state.ContactList.slice();
    tmpList[index] = contact;
    this.setState({ ContactList: tmpList })
    APIService.updateDatabase(tmpList)
  }

  onGetCurrentContact = (Id) => {
    const index = this.state.ContactList.findIndex(elem => elem.Id === Id)
    const currentContact = this.state.ContactList[index]
    this.setState({ CurrentContact: currentContact })
  }

  onEditContact = (Contact) => {
    const index = this.state.ContactList.findIndex(elem => elem.Id === Contact.Id)
    console.log(Contact.Id)
    const tmpList = this.state.ContactList.slice();

    tmpList[index] = Contact

    this.setState({ ContactList: tmpList })

    APIService.updateDatabase(tmpList)
  }



  render() {
    const { ContactList, CurrentContact } = this.state;

    return (
      <div className="container bootstrap snippets bootdeys bootdey" >
        <div className="row decor-default">


          <Router>
            <Switch>
              <Route path="/" exact render={() =>
                <Main
                  List={ContactList}
                  onChangeStatus={this.onChangeStatus}
                  onDeleteContact={this.onDeleteContact}
                  onGetCurrentContact={this.onGetCurrentContact} />} />
              <Route path="/add-new-contact" exact render={() => <AddContact onCreateContact={this.onCreateContact} />} />
              <Route path="/edit-contact" exact render={() => <EditContact Contact={CurrentContact} onEditContact={this.onEditContact} />} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Router>

        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
