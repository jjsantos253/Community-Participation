import React from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import firebase from 'firebase';
import './css/navbar.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Inicio from './Inicio.js';
import Formula from './Formulario.js';
import Publicacion from './publicacionCard.js';
import Terminos from './Terminos.js';
import Profile from './Profile.js';
import Nosotros from './Nosotros.js';
import Apoyanos from './Apoyanos.js';
import Sesion from './Sesion.js';
import Logo from './img/logo-min.png';



class Header extends React.Component {

constructor(props){
	super(props);

	this.state =	{
		user:null,
		isOpen: false
										};



  this.toggle = this.toggle.bind(this);
	this.handleLogOut = this.handleLogOut.bind(this);


}

toggle() { this.setState({isOpen: !this.state.isOpen}); }

componentWillMount(){

	firebase.auth().onAuthStateChanged(user => {
		this.setState({user});
																									});
}

handleLogOut(){
	firebase.auth().signOut()
	.then(result => this.createNotification('sesion'))
	.catch(error => this.createNotification('error'))
}


renderLoginButton(){

	if (this.state.user){
		return(
				<div>
			<NavItem>
				<NavLink><Link to="/perfil">{this.state.user.displayName}</Link></NavLink>
			</NavItem>
				</div>
				);}

	else {

		return(

			<div>

	<NavItem>
	<NavLink><Link to="/sesion" style={{color: "white"}}>Iniciar Sesion</Link></NavLink>
	</NavItem>

			</div>

				);}


}



  render() {
    return (

<Router>
	<div>
			<Navbar className="header"  light expand="md" >
          <NavbarBrand href="/" style={{color: "white"}}>
						<img src={Logo} alt="Participacion Comunitaria" style={{width:50, marginTop: -7}} />
						<b> Participacion Comunitaria</b>
					</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink><Link to="/publicar" style={{color: "white"}} >{'Publicar'}</Link></NavLink>
							</NavItem>
							<NavItem>
                <NavLink><Link style={{color: "white"}} to="/publicaciones">Ver Denuncias</Link></NavLink>
              </NavItem>
							<NavItem>
                <NavLink><Link style={{color: "white"}} to="/nosotros">Nosotros</Link></NavLink>
              </NavItem>
							<NavItem>
                <NavLink><Link to="/apoyanos" style={{color: "white"}} >{'Apoyanos'}</Link></NavLink>
              </NavItem>

									{this.renderLoginButton()}
							<NavItem>
								<NavLink><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="JV7EX3A5NE46S"/>
<input type="image" src="https://www.paypalobjects.com/es_ES/ES/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal, la forma rápida y segura de pagar en Internet."/>
<img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1"/>
</form>

</NavLink>
							</NavItem>
            </Nav>
          </Collapse>
        </Navbar>


		<Route exact path="/" component={Inicio}/>
		<Route exact path="/apoyanos" component={Apoyanos}/>
		<Route exact path="/sesion" component={Sesion}/>
		<Route exact path="/nosotros" component={Nosotros}/>
		<Route exact path="/terminos-de-uso-y-privacidad" component={Terminos}/>
		<Route path="/publicar" render={(props) => ( <Formula user={this.state.user}/> )}/>
		<Route path="/perfil" render={(props) => ( <Profile user={this.state.user}/> )}/>
		<Route path="/publicaciones" render={(props) => ( <Publicacion/> )}/>
<br></br>
<br></br>
</div>
</Router>


    );
  }
}

export default Header;
