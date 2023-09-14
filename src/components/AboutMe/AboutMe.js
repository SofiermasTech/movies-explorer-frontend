import './AboutMe.css';
import studentPhoto from '../../images/studentPhoto.jpg';

const AboutMe = () => {
   return (
      <section className="about" id="about">
         <h2 className="about__title">Студент</h2>
         <div className="about__container">
            <article className="about__student">
               <h3 className="about__student-name">Ермакова София</h3>
               <h4 className="about__student-job">Фронтенд-разработчик
               </h4>
               <p className="about__student-text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                  и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
               </p>
               <a className="link about__student-link" href='https://github.com/SofiermasTech' target="blank">Github</a>
            </article>
            <div className="about__container-foto">
               <img className="about__student-foto" src={studentPhoto} alt="Фото студента" />
            </div>
         </div>
      </section>
   )
};

export default AboutMe;