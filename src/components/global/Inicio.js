import React from 'react';
import { Container,Card, Button, Row, Col } from 'reactstrap';
import firebase from 'firebase';
import { Redirect } from 'react-router';
import './css/loader.css';
import './css/publicacion.css';
import MdCreate from 'react-icons/lib/md/create';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';
import { Jumbotron } from 'reactstrap';
import { Events, animateScroll as scroll, scroller } from 'react-scroll';


class Inicio extends React.Component {

	constructor(props){
		super(props);
		this.state ={
			categoria:[],
			publicaciones:[],
			single:'',
			item:[],
			nuevo:[],
			modal: false
};

this.changeState = this.changeState.bind(this);
this.toggle = this.toggle.bind(this);
this.goToForm = this.goToForm.bind(this);

}



componentDidMount () {

	this.changeState();

	Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

	}

	scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }


	toggle(id,titulo,detalle,provincia,municipio) {
		this.setState({
			id:id,
			titulo: titulo,
			detalle: detalle,
			provincia: provincia,
			municipio: municipio,
			modal: !this.state.modal

		});
	console.log("aqui va el id");
	console.log(this.state.id);

}


goToForm(){

this.setState({ redirect: true });

}


	componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

changeState(){

	const itemsRef = firebase.database().ref('publicacion').limitToLast(3).orderByChild('fecha');
	itemsRef.on('value', (snapshot) => {

		let items = snapshot.val();
		let newState = [];
		for (let item in items) {
			newState.push({
				id: item,
				titulo: items[item].titulo,
				fecha: items[item].fecha,
				provincia: items[item].provincia,
				municipio: items[item].municipio,
				detalle: items[item].detalle

			});
		}

		this.setState({publicaciones: newState});

	});

}

render() {

	const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/publicar'/>;
     }

  return (
		<div  style={{marginTop: "5%"}}>

<div id="category">
		<Container>
<NotificationContainer/>

	<div className="more">
	<div className="jumbo">
	      <Jumbotron style={{background: "rgba(246, 246, 246, 0.9)"}}>
					<div>
	        <h1 className="displayOther">Bienvenid@!</h1>
	        <h4 className="lead">Tienes una denuncia y quieres darla a conocer? Entonces estas en el lugar correcto.</h4>
					<br/>
	        <hr className="my-2" />
	        <h3>Publica tus propuestas de mejora y denuncias sociales con nosotros; para trabajar por el pais que todos queremos. Que esperas!</h3>

	          <Button color="primary" onClick={() => {this.goToForm()}}>Publicar Ahora <MdCreate/></Button>

					</div>
	      </Jumbotron>
	    </div>


				<section id="section02" className="demo">
				  <a onClick={() => scroll.scrollTo(500)}><span></span></a>
				</section>

			</div>

	</Container>
</div>


	<div id="results">

		<Container>

<div className="rowPublicaciones" style={{marginTop:"7%"}}>

<div style={{background: "rgba(255, 255, 255, 0.5)", paddingRight:"7%", paddingLeft:"7%"}}>

	<Col sm="12">
		<h3 style={{marginTop:"2%"}}>Denuncias Recientes:</h3>
{this.state.publicaciones.map((item) => {
			return (
<div key={item.id} className="col-md-12">
	<div className="categoryCard">

		<Card style={{background: "rgba(255, 255, 255, 0.94)",cursor: "pointer"}} onClick={() => {this.toggle(item.id,item.titulo,item.detalle,item.provincia,item.municipio)}}>

				<Row style={{color: "black"}}>
				<Col xs="12"><p className="fecha">{item.fecha}</p></Col>
				<Row><Col><h4>{item.titulo}</h4></Col></Row>
					<Col xs="6"><p>{item.provincia}</p></Col>
					<Col xs="6"><p>{item.municipio}</p></Col>
				</Row>


		</Card>

	</div>
</div>

)
	})}
</Col>
</div>

	<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.state.id}>

		<ModalHeader toggle={this.toggle}>{this.state.titulo}</ModalHeader>
			<ModalBody>
				<Row><Col><h5>Descripcion:</h5></Col></Row>
				<Row><Col>{this.state.detalle}</Col></Row>
				<hr></hr>
				<Row><Col><h5>Lugar:</h5></Col></Row>
				<Row>
					<Col xs="6">{this.state.provincia}</Col>
					<Col xs="6">{this.state.municipio}</Col>
				</Row>
			</ModalBody>
		<ModalFooter>
		</ModalFooter>
	</Modal>
			</div>
</Container>
</div>

	</div>

  );

}
}

export default Inicio;
