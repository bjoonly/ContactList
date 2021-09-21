import { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';

class AddContact extends Component {

    state = {

        Name: "",
        Image: null,
        PhoneNumber: "",
        Email: "",
        Gender: "",
        Status: "",
        isRedirect: false
    }
    onGetName = (e) => {
        const name = e.target.value;
        this.setState({ Name: name })

    }
    onGetPhoneNumber = (e) => {
        const phone = e.target.value;
        this.setState({ PhoneNumber: phone })
    }
    onGetEmail = (e) => {
        const email = e.target.value;
        this.setState({ Email: email })
    }
    onGetGender = (e) => {
        const gender = e.target.value;
        this.setState({ Gender: gender })
    }
    onGetStatus = (e) => {
        const status = e.target.value;
        this.setState({ Status: status })
    }
    onGetAvatar = (e) => {
        const image = e.target.value;
        this.setState({ Image: image })
    }
    CreateContact = (e) => {
        e.preventDefault();
        const { Name, Image, PhoneNumber, Email, Gender, Status } = this.state

        const newContact = {
            Id: uuidv4(),
            Name,
            Image,
            PhoneNumber,
            Email,
            Gender,
            Status
        }
        this.setState({
            isRedirect: true
        })
        this.props.onCreateContact(newContact)
    }

    render() {
        let { Gender, Image, isRedirect } = this.state;
        if (isRedirect === true) {
            return <Redirect to="/" />
        }
        if (Image === null || Image === "")
            Image = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"
        else
            Image = `https://api.randomuser.me/portraits/${Gender}/${Image}.jpg`
        return (

            <form className="container my-3" onSubmit={this.CreateContact}>

                <div className="card col">
                    <div className="row">

                        <div className="col-8 px-0">


                            <div className="card-body">

                                <div className="row">
                                    <div className="col px-2">
                                        <div className="form-group row ">
                                            <h2 className="col">Add contact</h2>
                                        </div>
                                        <div className="form-group  ">
                                            <label htmlFor="Name">Name</label>
                                            <input id="Name" name="Name" type="name" required className="form-control" onChange={this.onGetName} placeholder="Enter full name" />
                                        </div>

                                        <div className="form-group ">
                                            <label htmlFor="PhoneNumber">Phone number</label>
                                            <input id="PhoneNumber" name="PhoneNumber" required className="form-control" type="tel" onChange={this.onGetPhoneNumber} placeholder="Enter phone number" />
                                        </div>


                                        <div className="form-group  ">
                                            <label htmlFor="Email">Email</label>
                                            <input id="Email" name="Email" className="form-control" required type="email" placeholder="Enter email" onChange={this.onGetEmail} />

                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="Status">Gender</label>
                                            <select className="custom-select" onChange={this.onGetGender}>
                                                <option defaultValue>Choose...</option>
                                                <option value="men">Men</option>
                                                <option value="women">Women</option>
                                            </select>
                                        </div>
                                        <div className="form-group ">
                                            <label htmlFor="Avatar">Avatar</label>
                                            <input id="Avatar" name="Avatar" min="0" max="99" className="form-control" type="number" onChange={this.onGetAvatar} placeholder="Enter number of avatar" />
                                        </div>
                                        <div className="form-group  ">
                                            <label htmlFor="Status">Status</label>
                                            <select className="custom-select" onChange={this.onGetStatus}>
                                                <option defaultValue>Choose...</option>
                                                <option value="Work">Work</option>
                                                <option value="Family">Family</option>
                                                <option value="Private">Private</option>
                                                <option value="Friend">Friend</option>
                                            </select>
                                        </div>
                                    </div>


                                </div>
                            </div>




                        </div>
                        <div className="col-4 card-body ">

                            <div className="form-group col pt-2 px-0 mt-auto" >
                                <img src={Image} className="w-100 h-100 d-block avatar" id="image" alt="Contact" />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer px-0 col bg-transparent">


                        <div className="row col px-0 mx-0">


                            <div className="col pr-0 pl-0">
                                <button className="btn btn-success col" type="submit" >Add </button>

                            </div>
                            <div className="col pr-0 ">
                                <Link to="/" className="btn btn-info col">Back </Link>

                            </div>


                        </div>
                    </div>
                </div>


            </form>

        );
    }
}

export default AddContact