import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Avatar from '../../assets/avatar.png';

import ReactIcon from '../../assets/react.svg';
import VueIcon from '../../assets/vue.svg';
import JsIcon from '../../assets/js.svg';
import NpmIcon from '../../assets/npm.svg';
import SassIcon from '../../assets/sass.svg';
import ReduxIcon from '../../assets/redux.svg';
import NodeIcon from '../../assets/node.svg';

import './home.css';

const Home = () => {
  return (
    <>
        <Navbar/>
        <main className='main'>
       
          <section className='description'>
            <h1> Home </h1>
            <img src={Avatar}  className='avatar' height= '80px' width= '80px' alt='avatar'></img>
            <p className='h1-description'> Je m'appelle Adrien et je suis développeur web </p>
           
          </section>
          <section className='intro'>
            <article>
              Je suis développeur web freelance. J'utilise React, Next, Vue, Node 
              et pleins d'autres outils modernes pour optimiser vos projets.
            </article>
            <div className='skills'>            
              <img className='skills-icons'src={ReactIcon} alt='react'/> 
              <img className='skills-icons' src={VueIcon} alt='vue'/>
              <img className='skills-icons' src={JsIcon} alt='js'/>
              <img className='skills-icons' src={NpmIcon} alt='npm'/>
              <img className='skills-icons' src={SassIcon} alt='sass'/>
              <img className='skills-icons' src={NodeIcon} alt='node'/>
              <img className='skills-icons' src={ReduxIcon} alt='redux'/>
            </div>             
          </section>
          <h2 className='h2-home'> Expériences </h2>
            <section className='description'>
              <div className='work'>
                <p className='date'> Avril 2022 - Maintenant </p>
                <p className='work-description'> Freelance </p>
              </div>
              <div className='work'>
                <p className='date'> Juillet 2021 - Septembre 2022 </p>
                <p className='work-description'> Formation de Developpeur Frontend </p>
              </div>
              <div className='work'>
                <p className='date'> Juillet 2020 - Juillet 2021  </p>
                <p className='work-description'> Formation de Developpeur </p>
              </div>
            </section>
        </main>
        < Footer />
    </>
  )
}
export default Home