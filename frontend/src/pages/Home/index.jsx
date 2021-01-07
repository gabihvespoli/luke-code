import React from 'react';
import Animation from '../../Components/Animation/Index';
import CardCourse from '../../Components/CardCourse';
import CardCategory from '../../Components/CardCategory';

import './styles.css';
import logo from '../../assets/images/logo.png';

import yoda from '../../assets/images/characters/yoda.png';
import separator from '../../assets/images/separator.svg';

import backend from '../../assets/images/categories/backend-solid.svg';
import database from '../../assets/images/categories/database-solid.svg';
import security from '../../assets/images/categories/security-solid.svg';
import mobile from '../../assets/images/categories/mobile-alt-solid.svg';
import frontend from '../../assets/images/categories/front-solid.svg';
import cloud from '../../assets/images/categories/cloud-solid.svg';

import courseReactRedux from '../../assets/images/courses/react-redux.jpg';
import coursePhp from '../../assets/images/courses/php.jpg';
import courseFlutter from '../../assets/images/courses/flutter.jpg';


const Home = () => {
  return (
    <>
      <Animation/>

      <div className="section-1">
        <div className="box">
          <header className="header">
            <h2>Luke Code <img src={logo} alt="Logo"/></h2>
            
            <nav>
              <button>FAZER LOGIN</button>
              <button>INSCREVA-SE</button>
              <button className="btn-menu">
                <i className="fas fa-bars"/>
              </button>
            </nav>
          </header>
          <main>
            <section>
              <h1>Se torne um mestre<br/>da programação!</h1>
              <img src={separator} alt="hr"/>
              <p>Dê o próximo passo para o seu futuro, <br/> que a força esteja com você.</p>
            </section>

            <section>
              <img src={yoda} alt="Yoda Star Wars"/>
            </section>
          </main>
        </div>
      </div>
      <div className="section-2">
        <div className="box">
          <h2>+ 3 Cursos Completos</h2>
          <p>
            Na Luke code, você tem acesso a 3 cursos gratuitos, basta se cadastrar na plataforma.
          </p>
          <section className="card-container">
            <CardCourse image={courseReactRedux} description="Desenvolvimento front-end React e Redux">
              Desenvolvimento front-end <br /> React e Redux
            </CardCourse>

            <CardCourse image={coursePhp} description="PHP 7 - Trabalhando com PSRs">
              PHP 7 - Trabalhando com PSRs
            </CardCourse>

            <CardCourse image={courseFlutter} description="Desenvolvimento IOS e Android com Flutter">
              Desenvolvimento IOS e Android <br/>com Flutter
            </CardCourse>
          </section>
          <button>
            INSCREVA-SE
          </button>
        </div>
      </div>
      <div className="section-3">
        <div className="box">
          <h2>O que oferecemos para você</h2>
          <section className="categories-container">
            <CardCategory image={backend} title="BACK-END" courses="22 cursos" color="Crimson"/>
            <CardCategory image={database} title="BANCO DE DADOS" courses="2 cursos" color="Goldenrod"/>
            <CardCategory image={security} title="SEGURANÇA" courses="22 cursos" color="BlueViolet"/>
            <CardCategory image={mobile} title="MOBILE" courses="7 cursos" color="DarkBlue"/>
            <CardCategory image={frontend} title="FRONT-END" courses="18 cursos" color="DarkGreen"/>
            <CardCategory image={cloud} title="CLOUD-COMPUTING" courses="22 cursos" color="OrangeRed"/>
          </section>
        </div>
      </div>
      
      <div className="section-4">
        <div className="box">
          <h2>Depoimentos</h2>

        </div>
      </div>
      <footer>
        &copy; { new Date().getFullYear() } Luke Code &middot; Alguns direitos reservados
      </footer>
    </>
  );
};

export default Home;