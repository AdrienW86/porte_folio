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
                z = 130
            else if(window.innerWidth < 350)
                z = 140
            else if(window.innerWidth < 400)
                z = 160
            else if(window.innerWidth < 450)
                z = 180
            else if(window.innerWidth < 500)
                z = 200
            else if(window.innerWidth < 600)
                z = 220;
            else if(window.innerWidth < 760)
                z = 250;
            else if(window.innerWidth < 820)
                z = 300;
            else if(window.innerWidth < 1000)
                z = 315;
            else if(window.innerWidth < 1200)
                z = 370;
            else if(window.innerWidth < 1600)
                z = 450;
            else if(window.innerWidth >= 1600)
                z = 580;
           
            const span = document.querySelectorAll('.box a');
            span.forEach((element, i)=>{
                nElements = span.length;
                const valeur = (360/ nElements) * (i+1);
                element.style.transform = 'rotateY(' + valeur + 'deg) rotateX(-20deg) translateZ(' + z + 'px)';
            })
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