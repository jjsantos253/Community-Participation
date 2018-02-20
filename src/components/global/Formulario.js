import React from 'react';
import {Container, Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import firebase from 'firebase';
import './css/form.css';
import MdSend from 'react-icons/lib/md/send';
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';



class Formulario extends React.Component {

	constructor(props){
super(props);

var today = new Date(),
		 date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

this.state = {
	categoria: 'Infraestructura',
	tipo: 'Denuncia',
			titulo: '',
			detalle: '',
			provincia: 'DISTRITO NACIONAL',
			municipio: 'SANTO DOMINGO DE GUZMAN',
			direccion: '',
			nombre: '',
      telefono: '',
			email: '',
			date: date,
			municipioData: [{ value: 'SANTO DOMINGO DE GUZMAN', name: 'SANTO DOMINGO DE GUZMAN' }],

			provinciaData: [{ value: 'DISTRITO NACIONAL', name: 'DISTRITO NACIONAL' },
											{ value: 'AZUA', name: 'AZUA' },
											{ value: 'BAORUCO', name: 'BAORUCO' },
											{ value: 'BARAHONA', name: 'BARAHONA' },
										{ value: 'DAJABON', name: 'DAJABON' },
									{ value: 'DUARTE', name: 'DUARTE' },
								{ value: 'ELIAS PIÑA', name: 'ELIAS PIÑA' },
							{ value: 'EL SEIBO', name: 'EL SEIBO' },
						{ value: 'ESPAILLAT', name: 'ESPAILLAT' },
						{ value: 'INDEPENDENCIA', name: 'INDEPENDENCIA' },
						{ value: 'LA ALTAGRACIA', name: 'LA ALTAGRACIA' },
						{ value: 'LA ROMANA', name: 'LA ROMANA' },
						{ value: 'LA VEGA', name: 'LA VEGA' },
						{ value: 'MARIA TRINIDAD SANCHEZ', name: 'MARIA TRINIDAD SANCHEZ' },
						{ value: 'MONTE CRISTI', name: 'MONTE CRISTI' },
					{ value: 'PEDERNALES', name: 'PEDERNALES' },
				{ value: 'PERAVIA', name: 'PERAVIA' },
			{ value: 'PUERTO PLATA', name: 'PUERTO PLATA' },
		{ value: 'SALCEDO', name: 'SALCEDO' },
		{ value: 'SAMANA', name: 'SAMANA' },
		{ value: 'SAN CRISTOBAL', name: 'SAN CRISTOBAL' },
		{ value: 'SAN JUAN', name: 'SAN JUAN' },
		{ value: 'SAN PEDRO DE MACORIS', name: 'SAN PEDRO DE MACORIS' },
		{ value: 'SANCHEZ RAMIREZ', name: 'SANCHEZ RAMIREZ' },
		{ value: 'SANTIAGO', name: 'SANTIAGO' },
		{ value: 'SANTIAGO RODRIGUEZ', name: 'SANTIAGO RODRIGUEZ' },
		{ value: 'VALVERDE', name: 'VALVERDE' },
		{ value: 'MONSEÑOR NOUEL', name: 'MONSEÑOR NOUEL' },
		{ value: 'MONTE PLATA', name: 'MONTE PLATA' },
			{ value: 'HATO MAYOR', name: 'HATO MAYOR' },
			{ value: 'SAN JOSE DE OCOA', name: 'SAN JOSE DE OCOA' },
			{ value: 'SANTO DOMINGO', name: 'SANTO DOMINGO' }]

    }

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.myAddress = this.myAddress.bind(this);
		this.createNotification = this.createNotification.bind(this);

}


 myAddress() {

   var x = document.getElementById("Provincia").value;

switch(x) {
   case "DISTRITO NACIONAL":
	 			this.setState({ municipioData:[{ value: '', name: '' },
					{ value: 'SANTO DOMINGO DE GUZMAN', name: 'SANTO DOMINGO DE GUZMAN' }]});
       break;
   case "AZUA":
      this.setState({ municipioData:[{ value: '', name: '' },
				{ value: 'AZUA DE COMPOSTELA', name: 'AZUA DE COMPOSTELA' },
				{ value: 'LAS YAYAS DE VIAJAMA', name: 'LAS YAYAS DE VIAJAMA' },
				{ value: 'PADRE LAS CASAS', name: 'PADRE LAS CASAS' },
				{ value: 'PERALTA', name: 'PERALTA' }]});
       break;
		case "BAORUCO":
	        this.setState({ municipioData:[{ value: '', name: '' },
						{ value: 'NEIBA', name: 'NEIBA' },
	  				{ value: 'GALVAN', name: 'GALVAN' },
	  				{ value: 'TAMAYO', name: 'TAMAYO' },
	  				{ value: 'VILLA JARAGUA', name: 'VILLA JARAGUA' }]});
	         break;
					 case "BARAHONA":
		 	       this.setState({ municipioData:[{ value: '', name: '' },
							 { value: 'SANTA CRUZ DE BARAHONA', name: 'SANTA CRUZ DE BARAHONA' },
		 	 				{ value: 'CABRAL', name: 'CABRAL' },
		 	 				{ value: 'ENRIQUILLO', name: 'ENRIQUILLO' },
		 	 				{ value: 'PARAISO', name: 'PARAISO' },
							{ value: 'VICENTE NOBLE', name: 'VICENTE NOBLE' }]});
		 	        break;
							case "DAJABON":
					       this.setState({ municipioData:[{ value: '', name: '' },
									 { value: 'DAJABON', name: 'DAJABON' },
					 				{ value: 'LOMA DE CABRERA', name: 'LOMA DE CABRERA' },
					 				{ value: 'PARTIDO', name: 'PARTIDO' },
					 				{ value: 'RESTAURACION', name: 'RESTAURACION' }]});
					        break;
									case "DUARTE":
							       this.setState({ municipioData:[{ value: '', name: '' },
											 { value: 'SAN FRANCISCO DE MACORIS', name: 'SAN FRANCISCO DE MACORIS' },
							 				{ value: 'ARENOSO', name: 'ARENOSO' },
							 				{ value: 'CASTILLO', name: 'CASTILLO' },
							 				{ value: 'PIMENTEL', name: 'PIMENTEL' },
											{ value: 'VILLA RIVA', name: 'VILLA RIVA' },
											{ value: 'LAS GUARANAS', name: 'LAS GUARANAS' }]});
							        break;
											case "ELIAS PIÑA":
									       this.setState({ municipioData:[{ value: '', name: '' },
													 { value: 'COMENDADOR', name: 'COMENDADOR' },
									 				{ value: 'BANICA', name: 'BANICA' },
									 				{ value: 'EL LLANO', name: 'EL LLANO' },
									 				{ value: 'HONDO VALLE', name: 'HONDO VALLE' },
													{ value: 'PEDRO SANTANA', name: 'PEDRO SANTANA' }]});
									        break;
													case "EL SEIBO":
											       this.setState({ municipioData:[{ value: '', name: '' },
															 { value: 'SANTA CRUZ DE EL SEIBO', name: 'SANTA CRUZ DE EL SEIBO' },
											 				{ value: 'MICHES', name: 'MICHES' }]});
											        break;
															case "ESPAILLAT":
													       this.setState({ municipioData:[{ value: '', name: '' },
																	 { value: 'MOCA', name: 'MOCA' },
													 				{ value: 'CAYETANO GERMOSEN', name: 'CAYETANO GERMOSEN' },
													 				{ value: 'GASPAR HERNANDEZ', name: 'GASPAR HERNANDEZ' },
													 				{ value: 'JAMAO AL NORTE', name: 'JAMAO AL NORTE' }]});
													        break;
																	case "INDEPENDENCIA":
															       this.setState({ municipioData:[{ value: '', name: '' },
																			 { value: 'JIMANI', name: 'JIMANI' },
															 				{ value: 'DUVERGE', name: 'DUVERGE' },
															 				{ value: 'LA DESCUBIERTA', name: 'LA DESCUBIERTA' },
															 				{ value: 'POSTRER RIO', name: 'POSTRER RIO' }]});
															        break;
																			case "LA ALTAGRACIA":
																	       this.setState({ municipioData:[{ value: '', name: '' },
																					 { value: 'SALVALEON DE HIGUEY', name: 'SALVALEON DE HIGUEY' },
																	 				{ value: 'SAN RAFAEL DEL YUMA', name: 'SAN RAFAEL DEL YUMA' }]});
																	        break;
																					case "LA ROMANA":
																			       this.setState({ municipioData:[{ value: '', name: '' },
																							 { value: 'LA ROMANA', name: 'LA ROMANA' },
																						 { value: 'GUAYMATE', name: 'GUAYMATE' }]});
																			        break;
																							case "AZUA":
																					       this.setState({ municipioData:[{ value: '', name: '' },
																									 { value: 'AZUA DE COMPOSTELA', name: 'AZUA DE COMPOSTELA' },
																					 				{ value: 'LAS YAYAS DE VIAJAMA', name: 'LAS YAYAS DE VIAJAMA' },
																					 				{ value: 'PADRE LAS CASAS', name: 'PADRE LAS CASAS' },
																					 				{ value: 'PERALTA', name: 'PERALTA' }]});
																					        break;
																									case "LA VEGA":
																							       this.setState({ municipioData:[{ value: '', name: '' },
																											 { value: 'CONCEPCION DE LA VEGA', name: 'CONCEPCION DE LA VEGA' },
																							 				{ value: 'CONSTANZA', name: 'CONSTANZA' },
																							 				{ value: 'JARABACOA', name: 'JARABACOA' },
																							 				{ value: 'JIMA ABAJO', name: 'JIMA ABAJO' }]});
																							        break;
																											case "MARIA TRINIDAD SANCHEZ":
																									       this.setState({ municipioData:[{ value: '', name: '' },
																													 { value: 'NAGUA', name: 'NAGUA' },
																									 				{ value: 'CABRERA', name: 'CABRERA' },
																									 				{ value: 'EL FACTOR', name: 'EL FACTOR' },
																									 				{ value: 'RIO SAN JUAN', name: 'RIO SAN JUAN' }]});
																									        break;
																													case "MONTE CRISTI":
																											       this.setState({ municipioData:[{ value: '', name: '' },
																															 { value: 'SAN FERNANDO DE MONTE CRISTI', name: 'SAN FERNANDO DE MONTE CRISTI' },
																											 				{ value: 'CASTAÑUELAS', name: 'CASTAÑUELAS' },
																											 				{ value: 'GUAYUBIN', name: 'GUAYUBIN' },
																											 				{ value: 'LAS MATAS DE SANTA CRUZ', name: 'LAS MATAS DE SANTA CRUZ' },
																															{ value: 'PEPILLO SALCEDO MANZANILLO', name: 'PEPILLO SALCEDO MANZANILLO' },
																															{ value: 'VILLA VAZQUEZ', name: 'VILLA VAZQUEZ' }]});
																											        break;
																															case "PEDERNALES":
																													       this.setState({ municipioData:[{ value: '', name: '' },
																																	 { value: 'PEDERNALES', name: 'PEDERNALES' },
																													 				{ value: 'OVIEDO', name: 'OVIEDO' }]});
																													        break;
																																	case "PERAVIA":
																															       this.setState({ municipioData:[{ value: '', name: '' },
																																			 { value: 'BANI', name: 'BANI' },
																															 				{ value: 'NIZAO', name: 'NIZAO' },
																															 				{ value: 'MATANZAS', name: 'MATANZAS' }]});
																															        break;
																																			case "PUERTO PLATA":
																																	       this.setState({ municipioData:[{ value: '', name: '' },
																																					 { value: 'SAN FELIPE DE PUERTO PLATA', name: 'SAN FELIPE DE PUERTO PLATA' },
																																	 				{ value: 'ALTAMIRA', name: 'ALTAMIRA' },
																																	 				{ value: 'GUANANICO', name: 'GUANANICO' },
																																	 				{ value: 'IMBERT', name: 'IMBERT' },
																																					{ value: 'LOS HIDALGOS', name: 'LOS HIDALGOS' },
																																					{ value: 'LUPERON', name: 'LUPERON' },
																																					{ value: 'SOSUA', name: 'SOSUA' },
																																					{ value: 'VILLA ISABELA', name: 'VILLA ISABELA' }]});
																																	        break;
																																					case "SALCEDO":
																																			       this.setState({ municipioData:[{ value: '', name: '' },
																																							 { value: 'SALCEDO', name: 'SALCEDO' },
																																			 				{ value: 'TENARES', name: 'TENARES' },
																																			 				{ value: 'VILLA TAPIA', name: 'VILLA TAPIA' }]});
																																			        break;
																																							case "SAMANA":
																																					       this.setState({ municipioData:[{ value: '', name: '' },
																																									 { value: 'SANTA BARBARA DE SAMANA', name: 'SANTA BARBARA DE SAMANA' },
																																					 				{ value: 'SANCHEZ', name: 'SANCHEZ' },
																																					 				{ value: 'LAS TERRENAS', name: 'LAS TERRENAS' }]});
																																					        break;
																																									case "SAN CRISTOBAL":
																																							       this.setState({ municipioData:[{ value: '', name: '' },
																																											 { value: 'SAN CRISTOBAL', name: 'SAN CRISTOBAL' },
																																							 				{ value: 'BAJOS DE HAINA', name: 'BAJOS DE HAINA' },
																																							 				{ value: 'CAMBITA GARABITOS', name: 'CAMBITA GARABITOS' },
																																											{ value: 'SAN GREGORIO DE NIGUA', name: 'SAN GREGORIO DE NIGUA' },
																																											{ value: 'SABANA GRANDE DE PALENQUE', name: 'SABANA GRANDE DE PALENQUE' },
																																											{ value: 'YAGUATE', name: 'YAGUATE' },
																																							 				{ value: 'VILLA ALTAGRACIA', name: 'VILLA ALTAGRACIA' }]});
																																							        break;
																																											case "SAN JUAN":
																																									       this.setState({ municipioData:[{ value: '', name: '' },
																																													 { value: 'SAN JUAN DE LA MAGUANA', name: 'SAN JUAN DE LA MAGUANA' },
																																									 				{ value: 'BOHECHIO', name: 'BOHECHIO' },
																																									 				{ value: 'EL CERCADO', name: 'EL CERCADO' },
																																													{ value: 'JUAN DE HERRERA', name: 'JUAN DE HERRERA' },
																																									 				{ value: 'LAS MATAS DE FARFAN', name: 'LAS MATAS DE FARFAN' },
																																									 				{ value: 'VALLEJUELO', name: 'VALLEJUELO' }]});
																																									        break;
																																													case "SAN PEDRO DE MACORIS":
																																											       this.setState({ municipioData:[{ value: '', name: '' },
																																															 { value: 'SAN PEDRO DE MACORIS', name: 'SAN PEDRO DE MACORIS' },
																																											 				{ value: 'SAN JOSE DE LOS LLANOS', name: 'SAN JOSE DE LOS LLANOS' },
																																											 				{ value: 'RAMON SANTANA', name: 'RAMON SANTANA' },
																																															{ value: 'CONSUELO', name: 'CONSUELO' },
																																															{ value: 'LOS GUAYACANES', name: 'LOS GUAYACANES' },
																																											 				{ value: 'QUISQUEYA', name: 'QUISQUEYA' }]});
																																											        break;
																																															case "SANCHEZ RAMIREZ":
																																													       this.setState({ municipioData:[{ value: '', name: '' },
																																																	 { value: 'COTUI', name: 'COTUI' },
																																													 				{ value: 'CEVICOS', name: 'CEVICOS' },
																																													 				{ value: 'FANTINO', name: 'FANTINO' }]});
																																													        break;
																																																	case "SANTIAGO":
																																															       this.setState({ municipioData:[{ value: '', name: '' },
																																																			 { value: 'SANTIAGO DE LOS CABALLEROS', name: 'SANTIAGO DE LOS CABALLEROS' },
																																															 				{ value: 'VILLA BISONO NAVARRETE', name: 'VILLA BISONO NAVARRETE' },
																																															 				{ value: 'JANICO', name: 'JANICO' },
																																																			{ value: 'LICEY AL MEDIO', name: 'LICEY AL MEDIO' },
																																																			{ value: 'SAN JOSE DE LAS MATAS', name: 'SAN JOSE DE LAS MATAS' },
																																															 				{ value: 'TAMBORIL', name: 'TAMBORIL' },
																																															 				{ value: 'VILLA GONZALEZ', name: 'VILLA GONZALEZ' }]});
																																															        break;

																																																			case "SANTIAGO RODRIGUEZ":
																																																	       this.setState({ municipioData:[{ value: '', name: '' },
																																																					 { value: 'SAN IGNACIO DE SABANETA', name: 'SAN IGNACIO DE SABANETA' },
																																																	 				{ value: 'VILLA LOS ALMACIGOS', name: 'VILLA LOS ALMACIGOS' },
																																																	 				{ value: 'MONCION', name: 'MONCION' }]});
																																																	        break;

																																																					case "VALVERDE":
																																																			       this.setState({ municipioData:[{ value: '', name: '' },
																																																							 { value: 'MAO', name: 'MAO' },
																																																			 				{ value: 'ESPERANZA', name: 'ESPERANZA' },
																																																			 				{ value: 'LAGUNA SALADA', name: 'LAGUNA SALADA' }]});
																																																			        break;
																																																							case "MONSEÑOR NOUEL":
																																																					       this.setState({ municipioData:[{ value: '', name: '' },
																																																									 { value: 'MONSEÑOR NOUEL BONAO', name: 'MONSEÑOR NOUEL BONAO' },
																																																					 				{ value: 'MAIMON', name: 'MAIMON' },
																																																					 				{ value: 'PIEDRA BLANCA', name: 'PIEDRA BLANCA' }]});
																																																					        break;
																																																									case "MONTE PLATA":
																																																							       this.setState({ municipioData:[{ value: '', name: '' },
																																																											 { value: 'MONTE PLATA', name: 'MONTE PLATA' },
																																																							 				{ value: 'BAYAGUANA', name: 'BAYAGUANA' },
																																																							 				{ value: 'SABANA GRANDE DE BOYA', name: 'SABANA GRANDE DE BOYA' },
																																																							 				{ value: 'YAMASA', name: 'YAMASA' }]});
																																																							        break;
																																																											case "HATO MAYOR":
																																																									       this.setState({ municipioData:[{ value: '', name: '' },
																																																													 { value: 'HATO MAYOR DEL REY', name: 'HATO MAYOR DEL REY' },
																																																									 				{ value: 'SABANA DE LA MAR', name: 'SABANA DE LA MAR' },
																																																									 				{ value: 'EL VALLE', name: 'EL VALLE' }]});
																																																									        break;

																																																													case "SAN JOSE DE OCOA":
																																																											       this.setState({ municipioData:[{ value: '', name: '' },
																																																															 { value: 'SAN JOSE DE OCOA', name: 'SAN JOSE DE OCOA' },
																																																											 				{ value: 'SABANA LARGA', name: 'SABANA LARGA' },
																																																															{ value: 'RANCHO ARRIBA', name: 'RANCHO ARRIBA' }]});
																																																											        break;
																																																															case "SANTO DOMINGO":
																																																													       this.setState({ municipioData:[{ value: '', name: '' },
																																																																	 { value: 'SANTO DOMINGO ESTE', name: 'SANTO DOMINGO ESTE' },
																																																													 				{ value: 'SANTO DOMINGO OESTE', name: 'SANTO DOMINGO OESTE' },
																																																													 				{ value: 'SANTO DOMINGO NORTE', name: 'SANTO DOMINGO NORTE' },
																																																													 				{ value: 'BOCA CHICA', name: 'BOCA CHICA' }]});
																																																													        break;


   default:

}

}


createNotification(type) {

    switch (type) {
      case 'info':
        NotificationManager.info('Accion cancelada.');
        break;
      case 'success':
        NotificationManager.success('Publicacion agregada de manera exitosa.', 'Exito!');
        break;
      case 'warning':
        NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
        break;
      case 'error':
        NotificationManager.error('Ha ocurrido un error...',  5000, () => {
          alert('callback');
        });
        break;
      default:
        break;
    }
  }

	handleChange(e) {
	  this.setState({ [e.target.name]: e.target.value});
		this.myAddress();
	}

	handleSubmit(e) {
  e.preventDefault();
  const itemsRef = firebase.database().ref('publicacion');
  const item = {
		categoria: this.state.categoria,
		tipo: this.state.tipo,
		titulo: this.state.titulo,
		detalle: this.state.detalle,
		provincia: this.state.provincia,
		municipio: this.state.municipio,
		direccion: this.state.direccion,
		nombre: this.state.nombre,
		telefono: this.state.telefono,
		email: this.state.email,
		fecha: this.state.date

  }
  itemsRef.push(item);

this.createNotification('success');

  this.setState({
		categoria: '',
		tipo: '',
				titulo: '',
				detalle: '',
				provincia: '',
				municipio: '',
				direccion: '',
				nombre: '',
	      telefono: '',
				email: ''
  });

	return(window.location.href = '/publicar');
}


render() {

  return (


		<Container>

<title>Hacer denuncia publica - PCRD</title>
			<NotificationContainer/>

		<div className="Formulario" >
    <Form onSubmit={this.handleSubmit}>
		<Row>
		<Col xs="12">

			<h5 style={{textAlign:"left"}} >Informacion principal</h5>
			<hr></hr>
			</Col>
		<Col xs="6">
				<FormGroup>
					<Label for="exampleSelect"className="etiqueta">Categoria</Label>
					<Input type="select" name="categoria" onChange={this.handleChange} value={this.state.categoria} placeholder="Categoria">
						<option>Infraestructura</option>
						<option>Institucionalidad</option>
						<option>Seguridad</option>
						<option>Salud</option>
						<option>Medio Ambiente</option>
					</Input>
				</FormGroup>
		</Col>

		<Col xs="6">
				<FormGroup>
					<Label for="exampleSelect" className="etiqueta">Tipo de publicacion</Label>
					<Input type="select" name="tipo" onChange={this.handleChange} value={this.state.tipo} placeholder="Tipo de publicacion">
						<option>Denuncia</option>
						<option>Propuesta de mejora</option>
					</Input>
				</FormGroup>
		</Col>

						<hr></hr>

				<Col xs="12">
            <div className="form-group">
              <Input type="text" name="titulo" maxlength="70" minlength="20" required="true" onChange={this.handleChange} value={this.state.titulo} placeholder="Titulo" />
            </div>
				</Col>

				<Col xs="12">
            <FormGroup>
              <Input type="textarea" name="detalle" minlength="10" required="true" onChange={this.handleChange} value={this.state.detalle} placeholder="Detalle" />
            </FormGroup>
				</Col>

				<Col xs="12">
				<br></br>
					<h5 style={{textAlign:"left"}}>Ubicacion del hecho</h5>
					<hr></hr>
					</Col>

				<Col xs="4">
            <FormGroup>
							<Label className="etiqueta">Provincia</Label>
								<Input type="select" id="Provincia" name="provincia" onChange={this.handleChange} value={this.state.provincia} placeholder="Provincia">
									{this.state.provinciaData.map((a, key) => {
													return <option key={key} value={a.value}>{a.name}</option>;
											})}
								</Input>
						</FormGroup>
				</Col>

				<Col xs="4">
            <FormGroup>
							<Label className="etiqueta">Municipio</Label>
							<Input type="select" id="Municipio" name="municipio" onChange={this.handleChange} value={this.state.municipio} placeholder="Municipio">
								{this.state.municipioData.map((e, key) => {
								        return <option key={key} value={e.value}>{e.name}</option>;
								    })}
							</Input>
						</FormGroup>
				</Col>

				<Col xs="4">
						<div className="form-group">
							<Label className="etiqueta">Direccion</Label>
							<Input type="text" name="direccion" onChange={this.handleChange} value={this.state.direccion} placeholder="Direccion" />
						</div>
				</Col>
				<Col xs="12">
				<br></br>
					<h5 style={{textAlign:"left"}}>Informacion Personal</h5>
					<hr></hr>
					</Col>
				<Col xs="4">
            <FormGroup>
              <Input type="text" name="nombre" onChange={this.handleChange} required="true" value={this.state.nombre} placeholder="Nombre" />
            </FormGroup>
				</Col>

				<Col xs="4">
            <FormGroup>
              <Input type="text" name="telefono" onChange={this.handleChange} required="true" value={this.state.telefono} placeholder="Telefono" />
            </FormGroup>
				</Col>

				<Col xs="4">
            <FormGroup>
              <Input type="email" name="email" onChange={this.handleChange} required="true" value={this.state.email} placeholder="Correo" />
            </FormGroup>
				</Col>


				<Col xs="12">
					<Label check><Input type="checkbox" required="true" />{' '}He Leido y acepto los terminos de uso de la plataforma.</Label>
				</Col>

				<Col xs="12">
				<Button color="success">Enviar Publicacion <MdSend/></Button>
				</Col>

</Row>
          </Form>
					</div>

	</Container>
  );

}
}

export default Formulario;
