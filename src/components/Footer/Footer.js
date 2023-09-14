import './Footer.css';


const Footer = () => {
   return (
      <section className="footer">
         <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
         <div className="footer__container">
            <p className="footer__date">&copy; 2023</p>
            <ul className="footer__list">
               <li className="footer__item">
                  <a className="link footer__link" href="https://practicum.yandex.ru" target="blank">
                  Яндекс.Практикум
                  </a>
               </li>
               <li className="footer__item">
                  <a
                     className="link footer__link" href="https://github.com/SofiermasTech" target="blank">
                     Github
                  </a>
               </li>
            </ul>
         </div>
      </section>
   )
};

export default Footer;
