import react from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css"

const NotFoundPage = () => {
    return (
        <div className="error-page-root">
            <div className="error-page-root_wrapper">
                <h1 className="error-page-root__status">404</h1>
                <h2 className="error-page-message-regular">
                    Ошибка. Похоже, вы перешли по неправильной ссылке. <br />
                    Перейти на <Link to="/" > главную </Link> 
                    </h2>
            </div>
        </div>
    )
}

export default NotFoundPage;