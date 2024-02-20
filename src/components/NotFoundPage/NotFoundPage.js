import "./NotFoundPage.css";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <main className="error-page">
            <div className="error-page__container">
                <h1 className="erorr-page__title">404</h1>
                <p className="error-page__text">Страница не найдена</p>
                <button
                    type="button"
                    className="error-page__link"
                    onClick={() => navigate(-1)}
                >
                    Назад
                </button>
            </div>
        </main>
    );
}

export default NotFoundPage;
