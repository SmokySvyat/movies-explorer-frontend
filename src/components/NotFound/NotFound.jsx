import './NotFound.css'
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <main className="error-page">
        <h1 className='error-page__heading'>404</h1>
        <span className='error-page__span'>Страница не найдена</span>
        <button className="error-page__btn link" onClick={goBack}>
          Назад
        </button>
    </main>
  );
}
export default NotFound;