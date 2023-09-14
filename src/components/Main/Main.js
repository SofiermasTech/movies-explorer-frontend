import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

const Main = ({loggedIn}) => {
   return (
      <>
         <Promo loggedIn={loggedIn} />
         <NavTab />
         <AboutProject />
         <Techs />
         <AboutMe />
         <Portfolio />
         <Footer />
      </>
   )
};

export default Main;