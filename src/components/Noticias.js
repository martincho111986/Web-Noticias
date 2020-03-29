import React from 'react';
import { categorias, getApiUrl, paises } from './config';
import ListaNoticias from './listasNoticias';
// import Paises from './Paises';
import Form from 'react-bootstrap/Form';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './style.css'
import Carousel from './carousel';


class Noticias extends React.Component {
    constructor() {
        super();
        this.state = {
            paises: '',
            categoria: 'general',
            listaNoticias: []
        };
    }



    componentDidMount() {
        this.fetchNoticia();
        // this.fetchPais();
    }

    seleccoinarCategoria = evt => {
        this.setState({ categoria: evt.target.value }, this.fetchNoticia)
    }

    fetchNoticia = () => {
        console.log(getApiUrl(this.state.categoria))
        fetch(getApiUrl(this.state.categoria, this.state.paises))
            .then(response => {
                return response.json();
            })
            .then(myJson => {
                this.setState({ listaNoticias: myJson.articles })
                console.log(myJson)
                console.log(myJson.paises)
            });
    }

    // SELECCIONAR PAIS

    seleccoinarCountry = evt =>{
        this.setState({paises: evt.target.value}, this.fetchNoticia)
    }

    // fetchPais = () => {

    //     fetch(getApiUrl(this.state.categoria, this.state.paises))
        
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(myJson => {
    //             this.setState({ paises: myJson.paises  })
                
    //         })
    // }

    render() {
        return (
            <>
                <div className="contenedorPrincipal">
                    <div className="containerTitle">
                    <h1 className="title">Tucuman Informa</h1>
                    </div>
                </div>
                <div className="contenedorSection">
                   <div className="contenedorCategorias">
                   <h4 className="ml-3">Selección Categoría</h4>
                    <div>
                        <Form className="ml-3">
                            <Form.Group
                                onSubmit={evt => evt.preventDefault()}
                                controlId="exampleForm.SelectCustom">
                                <Form.Control as="select"
                                    custom
                                    name="categoria"
                                    onChange={this.seleccoinarCategoria}>
                                    {categorias.map(option => (
                                        <option value={option} selected={this.state.categoria === option}>{option}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        
                    </div>
                   </div>
                    <div className="contenedorCountry">
                    <h4 className="ml-3">Seleccionar País</h4>
                    <div>
                        <Form className="ml-3">
                            <Form.Group
                                onSubmit={evt => evt.preventDefault()}
                                controlId="exampleForm.SelectCustom">
                                <Form.Control as="select"
                                    custom
                                    name="paises"
                                    onChange={this.seleccoinarCountry}>
                                    {paises.map(pais => (
                                        <option value={pais}>{pais}</option>
                                    ))}
                                
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        
                    </div>
                    </div>

                </div>
                <div>
                    <Carousel />
                </div>
                    <div className="noticias">
                        <h2 className="noticiasTitle">Títulos Principales </h2>
                    </div>
                <div className="containerNoticias">
                   
                    <ListaNoticias noticias={this.state.listaNoticias} />
                </div>

                <div className="footer">
                    <p className="footerText">Todos los derechos Reservados © Martin Jerez</p>
                    <div className="icons">
                        <a href="https://www.facebook.com/martin.jerezleal/" target="_blank" className="mr-2"><FaFacebookSquare /></a>
                        <a href="https://twitter.com/TinchoJerez" target="_blank" className="mr-2"><FaTwitter /></a>
                        <a href="https://www.instagram.com/martin.jerez.leal/" target="_blank" className="mr-2"><FaInstagram /></a>
                        <a href="#" target="_blank" className="mr-2"><FaLinkedinIn /></a>
                        <a href="https://github.com/martincho111986" target="_blank" className="mr-2"><FaGithub /></a>
                    </div>
                </div>

            </>
        );
    }
}

export default Noticias