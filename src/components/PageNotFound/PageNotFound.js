import './PageNotFound.css';

const PageNotFound = () => {
   return (
      <section className="not-found">
         <div className="not-found__container">
            <h1 className="not-found__title">404</h1>
            <p className="not-found__text">Страница не найдена</p>
         </div>
         <button type="button" className="not-found__btn">Назад</button>
      </section>
   )
};

export default PageNotFound;
