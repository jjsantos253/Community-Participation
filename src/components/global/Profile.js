import React from 'react';
import {Card, CardImg, CardBody, CardTitle, Button, Col, Row} from 'reactstrap';
import { Link } from 'react-router-dom';
import './css/publicacion.css';
import './css/loader.css';
import firebase from 'firebase';
import MdDelete from 'react-icons/lib/md/delete';
import MdExitToApp from 'react-icons/lib/md/exit-to-app';
import {Modal, ModalHeader, ModalBody } from 'reactstrap';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


class Profile extends React.Component {

	constructor(props){
super(props);
this.state ={
	publicaciones:[],
	email: 'null',
	telefono: '',
	titulo: '',
	detalle: '',
	user:this.props.user,
	detalleBox: false
};

this.startDetails = this.startDetails.bind(this);
this.eliminar = this.eliminar.bind(this);
this.createNotification = this.createNotification.bind(this);
this.handleLogOut = this.handleLogOut.bind(this);

}

createNotification(type) {

    switch (type) {
      case 'info':
        NotificationManager.info('Accion cancelada.');
        break;
      case 'success':
        NotificationManager.success('Publicacion eliminada de manera exitosa.', 'Exito!');
        break;
			case 'sesion':
	      NotificationManager.success('Sesion Cerrada.', 'Adios!');
	      break;
      case 'warning':
        NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
        break;
      case 'error':
        NotificationManager.error('Ha ocurrido un error...', 'Click me!', 5000, () => {
          alert('callback');
        });
        break;
      default:
        break;
    }
  }

	handleLogOut(){

		firebase.auth().signOut()
		.then(result => this.createNotification('sesion'))
		.catch(error => this.createNotification('error'))

	}


eliminar(id){

	confirmAlert({
	title: 'Confirmacion',
	message: 'Esta seguro que desea eliminar esta publicacion?',
	confirmLabel: 'Si',
	cancelLabel: 'No',

	onConfirm: () => {firebase.database().ref('publicacion').child(id).remove()},

	onCancel: () => {this.createNotification('info') }

})


}

	componentWillReceiveProps(nextProps){
		this.setState({user: nextProps.user})}

	startDetails(id,titulo,detalle,provincia,municipio) {

		this.setState({
			id:id,
			titulo: titulo,
			detalle: detalle,
			provincia: provincia,
			municipio: municipio,
			detalleBox: !this.state.detalleBox

		});
	console.log("aqui va el className");
	console.log(this.props.user);
}

componentWillMount () {

	if (!this.props.user) {

	return (window.location.replace("/"))

	}

}

componentDidMount () {
	console.log(this.props.user.email);

	const itemsRef = firebase.database().ref('publicacion').orderByChild("email").equalTo(this.state.user.email);
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

    this.setState({ publicaciones: newState });

  			});
	}


render() {

  return (
<div style={{margin: "5%"}}>
<div className="rowPublicaciones" style={{background: "rgba(255, 255, 255, 0.5)"}}>
	<NotificationContainer/>

	<div className="col-md-4">
		<div className="row">
				<div className="col-md-12">
				<Card style={{background: "rgba(255, 255, 255, 0.5)"}}>
					<CardBody>

				<CardImg top width="100%" src={this.state.user.photoURL}/>
				<CardTitle>{this.state.user.displayName}</CardTitle>

						<Link to="/">
						<Button style={{textAlign:"left"}} color="warning" onClick={() => {this.handleLogOut()}}>Cerrar Sesion <MdExitToApp/></Button>
						</Link>

				</CardBody>
			</Card>
				</div>
		</div>
	</div>
	<div className="col-md-8">
{this.state.publicaciones.map((item) => {
			return (
<div key={item.id} className="col-md-12">
	<div className="categoryCard">

		<Card style={{background: "rgba(255, 255, 255, 0.94)", cursor: "pointer"}}>
				<Row>

							<Col xs="6"><p className="fecha">{item.fecha}</p></Col>
							<Col xs="6"><p style={{textAlign:"right"}} onClick={() => {this.eliminar(item.id)}}><MdDelete style={{cursor: "pointer"}}/></p></Col>
							<Row onClick={() => {this.startDetails(item.id,item.titulo,item.detalle,item.provincia,item.municipio)}} style={{cursor: "pointer"}}>
				<Row><Col><h4>{item.titulo}</h4></Col></Row>

						<hr/>
						<Col xs="6"><p>{item.provincia}</p></Col>
						<Col xs="6"><p>{item.municipio}</p></Col>

						</Row>
			</Row>
		</Card>

				</div>
			</div>
				)
						})}
						</div>

						<Modal isOpen={this.state.detalleBox} toggle={this.startDetails} className={this.state.id}>

							<ModalHeader toggle={this.startDetails}>{this.state.titulo}</ModalHeader>
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

						</Modal>

</div>

</div>



  );

}
}

export default Profile;
