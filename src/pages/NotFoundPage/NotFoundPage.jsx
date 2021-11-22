import react from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            404. Not found! Go <Link to="/"> main news page</Link>
        </div>
    )
}

export default NotFoundPage;