import React from 'react';
import './carousel.css';
import img1 from './assets/covid1.png'
import img2 from './assets/dengue1.jpg'
import img3 from './assets/dengue2.jpg'
import img4 from './assets/covid2.jpeg'
import img5 from './assets/trump.png'
import img6 from './assets/quedateEnCasa.jpg'
import img7 from './assets/covid3.jpg'
import img8 from './assets/medicos.jpg'
import img9 from './assets/nuevaImagen.jpg'
import img10 from './assets/pandemia.png';
import img11 from './assets/nuevosCasos.jpg'
import img12 from './assets/precauciones.jpg'
import img13 from './assets/mapacovid.jpg'

const Carousel = () => {
    return (
        <>

            <div class="content">
                <div class="gallery-item slider-container">
                    <div class="slide-holder">
                        <img src={img1}
                            alt="prevencion covid-19" />
                        <img src={img2}
                            alt="dengue" />
                        <img src={img3}
                            alt="dengue1" />
                        <img src={img4}
                            alt="covid-place" />
                        <img src={img5}
                            alt="reabrir economia EEUU" />
                        <img src={img6}
                            alt="quedate en casa" />
                        <img src={img7}
                            alt="covid amenza global" />
                        <img src={img8}
                            alt="Gracias a Todos" />
                        <img src={img9}
                            alt="covid amenza global" />
                        <img src={img10}
                            alt="pandemia" />
                            <img src={img11}
                            alt="pandemia" />
                            <img src={img12}
                            alt="pandemia" />
                            <img src={img13}
                            alt="pandemia" />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Carousel;