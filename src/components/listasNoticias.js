import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ListaNoticias = ({ noticias }) => (
    <div className="noticiasListadas">
        {
            noticias.map(noticia => (
                <div className="noticia">
                    <h2></h2>
                    <Card  border="primary" className="my-3" style={{ width: '18rem', height:'30rem' }}>
                        <Card.Img variant="top" src={noticia.urlToImage} />
                        <Card.Body className="cardBody">
                            <Card.Title>{noticia.title}</Card.Title>
                            <Card.Text className="cardText">
                                {noticia.description}
                            </Card.Text>
                            
                        </Card.Body>
                        <Card.Footer>
                            <Button className="bckButton" variant="outline-primary" href={noticia.url} target="_blank">Seguir Leyendo</Button>
                        </Card.Footer>
                    </Card>
                </div>
            ))
        }
    </div>

)
export default ListaNoticias