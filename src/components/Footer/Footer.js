import './Footer.css';


const Footer = () => {
   return (
      <section className="footer">
         <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
         <div className="footer__container">
            <p className="footer__date">&copy; 2023</p>
            <ul className="footer__list">
               <li className="footer__item">
                  <a className="link footer__link" href=".">
                  Яндекс.Практикум
                  </a>
               </li>
               <li className="footer__item">
                  <a
                     className="link footer__link" href=".">
                     Github
                  </a>
               </li>
            </ul>
         </div>
      </section>
   )
};

export default Footer;
