import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
   const navigate = useNavigate();

   return (
      <main className="not-found">
         <div className="not-found__container">
            <h1 className="not-found__title">404</h1>
            <p className="not-found__text">Страница не найдена</p>
         </div>
         <button type="button" className="btn not-found__btn" onClick={() => navigate(-1)}>Назад</button>
      </main>
   )
};

export default PageNotFound;
