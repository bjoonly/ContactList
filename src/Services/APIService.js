
import { Component } from "react";

class APIService extends Component {

    url = "https://react-beade-default-rtdb.firebaseio.com/contacts.json"


    async fetchContactList() {
        const List = await fetch(this.url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                if (data == null) {
                    return {
                        List: []
                    }
                } else {
                    return {
                        List: data
                    }
                }
            }).catch(err => console.log(err))

        return List;
    }

    updateDatabase = (List) => {
        fetch(this.url,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify(List)
            })
            .then(res => { console.log(res) })
            .catch(res => { console.log(res) })
    }


}
const service = new APIService()
export default service