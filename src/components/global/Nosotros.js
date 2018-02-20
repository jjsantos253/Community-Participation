import React from 'react';
import {Container} from 'reactstrap';
import {Col, Row} from 'reactstrap';
import logo from './img/logo-min.png';
import './css/navbar.css';
import './css/publicacion.css';


class Nosotros extends React.Component {


render() {

  return (
      <Container>
        <Row>
          <div className="nosotrosBack">
            <Row>

                    <Col xs="12">
                    <img top width="25%" alt="Logo participacion comunitaria" src={logo}/>
                    </Col>
                    <hr/>
                    <Col xs="12">
                        <h4 className="nosotrosTexto">Somos un movimiento ciudadano no partidista, que ha identificado la necesidad de involucrar a los ciudadanos
                          dominicanos en la toma de acciones de manera mas activa con respecto a las problematicas que aquejan sus comunidades.</h4>
                    </Col>


                      <hr/>
            </Row>

            <Col xs="12">
                <h1 className="nosotrosTitulo">Nos Motiva</h1>
                <hr/>
            </Col>

            <Col xs="12">
                <h4 className="nosotrosTexto">Fomentar la participación de la sociedad civil no partidista,
                 en la toma de decisiones gubernamentales en sus comunidades;
                  mediante el uso correcto de las tecnologías de la información.</h4>

            </Col>

            <Col xs="12">
                <h1 className="nosotrosTitulo">Nuestra Meta</h1>
                  <hr/>
            </Col>

            <Col xs="12">
                  <h4 className="nosotrosTexto">Ser el medio tecnológico que vincule los gobiernos municipales con la sociedad civil,
                 y que permita expresar las propuestas de mejora o quejas de los munícipes;
                  para una buena ejecución del presupuesto municipal.</h4>
            </Col>

            </div>
        </Row>
       </Container>

  );

}
}

export default Nosotros;
