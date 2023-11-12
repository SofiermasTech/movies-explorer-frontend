import './NavTab.css';

const NavTab = () => {
   return (
      <section className="nav">
         <nav>
            <ul className="nav__list">
               <li>
                  <a className="link nav__item" href="#about-project">
                     О проекте
                  </a>
               </li>
               <li>
                  <a
                     className="link nav__item" href="#techs">
                     Технологии
                  </a>
               </li>
               <li>
                  <a className="link nav__item" href="#about">
                     Студент
                  </a>
               </li>
            </ul>
         </nav>
      </section>
   )
};

export default NavTab;
