import { Fragment } from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <Fragment >
            <h2>404 Not Found</h2>
            <Link to="/" >Go to home page</Link>
        </Fragment>
    )
}


export default NotFound;