import React, {useEffect} from 'react';
import './lightbox.css';


const Lightbox = (props) => {
   
        console.log(props.pictures)
        let deg = 0;
        let nElements;
    
        window.onresize = ()=>{
            responsiveDisplay();
        }
    
        useEffect(()=>{
            responsiveDisplay();
        });
    
        function responsiveDisplay(){
            let z;
            if(window.innerWidth < 300)
                z = 100
            else if(window.innerWidth < 400)
                z = 120
            else if(window.innerWidth < 500)
                z = 150
            else if(window.innerWidth < 600)
                z = 190;
            else if(window.innerWidth < 820)
                z = 250;
            else if(window.innerWidth < 1200)
                z = 400;
            else if(window.innerWidth < 1600)
                z = 500;
            else if(window.innerWidth >= 1600)
                z = 600;
            
            const span = document.querySelectorAll('.box a');
            span.forEach((element, i)=>{
                nElements = span.length;
                const valeur = (360/ nElements) * (i+1);
                element.style.transform = 'rotateY(' + valeur + 'deg) rotateX(-20deg) translateZ(' + z + 'px)';
            });
        }
    
        function clickButtonLeft(){
            deg -= 360 / nElements;
            const box = document.querySelector('.box');
            box.style.transform = 'perspective(1000px) rotateY(' + deg + 'deg)';
        }
    
        function clickButtonRight(){
            deg += 360 / nElements;
            const box = document.querySelector('.box');
            box.style.transform = 'perspective(1000px) rotateY(' + deg + 'deg)';
        }
    
        return(
            <div className="carousel">
                <div className="box">
                   {props.pictures.map((el, index) => <a key ={index} href={el.link}> <img src={el.picture} alt={el.alt}></img> <div className='title'> {el.title} </div></a>)}
                </div>
                <div onClick={clickButtonLeft} className="left"></div>
                <div onClick={clickButtonRight} className="right"></div>
            </div>
        );
    }
export default Lightbox