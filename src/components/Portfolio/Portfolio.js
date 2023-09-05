import './Portfolio.css';
import arrow from '../../images/arrow.svg';

const Portfolio = () => {
   return (
      <section className="portfolio">
         <h2 className="portfolio__title">Портфолио</h2>
         <ul className="portfolio__list">
            <li className="portfolio__item">
               <a className="link portfolio__link" href=".">
                  Статичный сайт
                  <img className="portfolio__img" src={arrow} alt="Стрелка"></img>
               </a>
            </li>
            <li className="portfolio__item">
               <a
                  className="link portfolio__link" href=".">
                  Адаптивный сайт
                  <img className="portfolio__img" src={arrow} alt="Стрелка"></img>
               </a>
            </li>
            <li className="portfolio__item">
               <a className="link portfolio__link" href=".">
                  Одностраничное приложение
                  <img className="portfolio__img" src={arrow} alt="Стрелка"></img>
               </a>
            </li>
         </ul>

      </section>
   )
};

export default Portfolio;
