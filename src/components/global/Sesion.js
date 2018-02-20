import React from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import user from './img/user-min.png';
import 'react-notifications/lib/notifications.css';
import { NotificationManager} from 'react-notifications';
import {GoogleLoginButton} from 'react-social-login-buttons';
import {FacebookLoginButton} from 'react-social-login-buttons';
import {Card,CardBody, Col, Row} from 'reactstrap';



class Header extends React.Component {

constructor(props){
	super(props);

	this.state =	{
		user:null,
		isOpen: false
										};

	this.handleAuthGoogle = this.handleAuthGoogle.bind(this);
	this.handleAuthFaceBook = this.handleAuthFaceBook.bind(this);
	this.handleAuthTwitter = this.handleAuthTwitter.bind(this);
	this.handleAuthGit = this.handleAuthGit.bind(this);
	this.createNotification = this.createNotification.bind(this);
  this.toggle = this.toggle.bind(this);


}

toggle() { this.setState({isOpen: !this.state.isOpen}); }

componentWillMount(){

	firebase.auth().onAuthStateChanged(user => {
		this.setState({user});
																									});
}




handleAuthTwitter(){
	const provider = new firebase.auth.TwitterAuthProvider();
	firebase.auth().signInWithPopup(provider)
	.then(result => this.createNotification('success'))
	.catch(error => this.createNotification('error'))
}


	handleAuthFaceBook(){
		const provider = new firebase.auth.FacebookAuthProvider();
		firebase.auth().signInWithPopup(provider)
		.then(result => this.createNotification('success'))
		.catch(error => this.createNotification('error'))
	}

	handleAuthGit(){
		const provider = new firebase.auth.GithubAuthProvider();
		firebase.auth().signInWithPopup(provider)
		.then(result => this.createNotification('success'))
		.catch(error => this.createNotification('error'))
	}

	handleAuthGoogle(){
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider)
		.then(result => this.createNotification('success'))
		.catch(error => this.createNotification('error'))

	}

	createNotification(type) {

	    switch (type) {
	      case 'info':
	        NotificationManager.info('Accion cancelada.');
	        break;
	      case 'success':
	        NotificationManager.success('Sesion Iniciada.', 'Bienvenido!');
	        break;
	      case 'warning':
	        NotificationManager.warning('Warning message',  3000);
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

  render() {
    return (
			<div style={{display: 'flex', justifyContent: 'center', padding:'2.25rem', marginTop: '25px'}}>
				<Row>

				<Col>
			<Card style={{background: "rgba(255, 255, 255, 0.6)"}}>
				<CardBody>

					<img src={user} width="120" height="120" alt="Inicio de Sesion"  />
					<hr></hr>
					<div><Link to="/"><GoogleLoginButton text="Iniciar con Google" onClick={this.handleAuthGoogle} /> </Link></div>
					<div><Link to="/"><FacebookLoginButton text="Iniciar con Facebook" onClick={this.handleAuthFaceBook} /></Link></div>
				</CardBody>
			</Card>
				</Col>

			</Row>

			</div>
    );
  }
}

export default Header;
