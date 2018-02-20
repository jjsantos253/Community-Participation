import React from 'react';
import {Media, Container} from 'reactstrap';
import dona from './img/money-min.png';
import comparte from './img/megaphone-min.png';
import escribe from './img/page-min.png';
import './css/navbar.css';
import './css/publicacion.css';

class Apoyanos extends React.Component {

render() {
  return (
		<Container>
<title>Ayudanos a ser mejores - PCRD</title>

      <div className="apoyanos">
			<Media>
			      <Media left href="/publicar">
							<img src={escribe} width="120" height="120" alt="Publica tus denuncias sociales" className="categorias" style={{marginRight: "1cm"}} />
			      </Media>
			      <Media body>
			        <Media heading className="titulo">
			          Publica
			        </Media>
							<p className="parrafo">Publica en nuestra plataforma tus denuncias sociales o propuestas de mejora sobre tu comunidad, para que sea conocida por otros usuarios y tomada
							en cuenta por los funcionarios locales para su ejecucion.</p>
			        </Media>
			    </Media>

				<hr></hr>

					<Media>
					      <Media left>
					        <img src={comparte} width="120" height="120" alt="Compartir tus denuncias" className="categorias" style={{marginRight: "1cm"}} />
					      </Media>
					      <Media body>
					        <Media heading className="titulo">
					          Comparte
					        </Media>
									<p className="parrafo">Ayuda a que las demandas de los demas usuarios sean
									vistas por mas y mas personas, generando mayor interes de los gobiernos locales por atender a sus demandas.</p>
					        </Media>
					    </Media>

								<hr></hr>

							<Media>
							      <Media left href="#">
											<img src={dona} width="120" height="120" alt="Donar" className="categorias" style={{marginRight: "1cm"}} />
							      </Media>
							      <Media body>
							        <Media heading className="titulo">
							          Dona
							        </Media>
											<p className="parrafo">Con tus donaciones podemos seguir mejorando la plataforma con nuevas funcionalidades a favor de nuestros usuarios, y generando nuevas
											ideas que permitan el activimos civil productivo mediante el uso de las tecnologias de la informacion.</p>
							        </Media>
							    </Media>

</div>

		</Container>
  );

}
}

export default Apoyanos;
