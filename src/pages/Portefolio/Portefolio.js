import React from 'react';
import array from '../../data'
import Lightbox from '../../components/Lightbox/Lightbox';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './portefolio.css';

const Portefolio = () => {
  return (
  <>
    <Navbar />
      <main className='main'>
        <h1> Portfolio </h1>
          <p className='h1-description'> Voici une exemple de plusieurs projets sur lesquels j'ai été amené à travailler </p>
        <Lightbox 
          pictures = {array}
        />
        <h2> Diplômes </h2>
        <section className='exp'>
            <div className='exp-card'>
              <h3> Développeur web </h3>
                <artcile>
                  Formation au métier de dévéloppeur web 
                </artcile>
            </div>
            <div className='level'>
              <h3> Certification</h3>
                <artcile>
                  Titre RNCP de niveau 5 (bac +2)
                </artcile>
            </div>
        </section>
        <section className='exp'>
            <div className='exp-card'>
              <h3> Développeur front-end </h3>
                <artcile>
                  Spécialisation du métier de développeur front-end 
                </artcile>
            </div>
            <div className='level'>
              <h3> Certification</h3>
                <artcile>
                  Titre RNCP de niveau 6 (bac + 4)
                </artcile>
            </div>
        </section>
      </main>
    <Footer />
   </>
  )
}

export default Portefolio