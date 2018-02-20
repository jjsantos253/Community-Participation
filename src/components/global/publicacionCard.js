import React from 'react';
import { Media,Card, CardBody, CardTitle, Button, Row, Col } from 'reactstrap';
import firebase from 'firebase';
import './css/loader.css';
import './css/publicacion.css';
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'react-notifications/lib/notifications.css';


	class publicacionCard extends React.Component {

	constructor(props){
		super(props);
		this.state ={
			categoria:[],
			publicaciones:[],
			single:'',
			item:'',
			nuevo:[{imgurl: '',categoria: 'Medio Ambiente',descripcion: ''}],
			modal: false
};

this.changeState = this.changeState.bind(this);
this.toggle = this.toggle.bind(this);
}

componentWillMount(){

	this.setState({item: [{id:'-KzGlLDy7OY8CMkW9Gry', imgurl: 'https://firebasestorage.googleapis.com/v0/b/partic…=media&token=d3b45f16-3a8d-4f51-837a-b3d49fdfaeb1',categoria: 'Medio Ambiente',descripcion: ''}]});
}


componentDidMount () {
	const itemsRef = firebase.database().ref('categoria');
  itemsRef.on('value', (snapshot) => {
    let items = snapshot.val();
    let newState = [];
    for (let item in items) {
      newState.push({
        id: item,
				categoria: items[item].categoria,
				imgurl: items[item].imgurl,
				descripcion: items[item].descripcion

      });
			this.changeState("Medio Ambiente","https://firebasestorage.googleapis.com/v0/b/participaciondb.appspot.com/o/tree.png?alt=media&token=d3b45f16-3a8d-4f51-837a-b3d49fdfaeb1");
    }
    this.setState({categoria: newState});
  });


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


}



changeState(categoria,item){

	this.setState({
		single: categoria,
		nombre:categoria,
		imagen:item});
	const itemsRef = firebase.database().ref('publicacion').orderByChild('categoria').equalTo(categoria);
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

	console.log(this.state.nombre);
	console.log(this.state.imagen);

  return (
		<div  style={{margin: "5%"}}>

	<div id="results">

<div className="rowPublicaciones" style={{background: "rgba(255, 255, 255, 0.5)"}}>

	<div className="col-md-4">

					<div className="col-md-12">

						<CardBody>
					<img width="50%" alt="categoria de denuncia" src={this.state.imagen}/>
					<CardTitle style={{color: "black"}}><h3>{this.state.nombre}</h3></CardTitle>
					</CardBody>

					</div>


		<div className="row">
					{this.state.categoria.map((item) => {
					        return (
					<div key={item.id} className="col-md-12">

					      <div style={{background: "rgba(0, 0, 0, 0)"}}>

										<Media style={{marginBottom: "2%", marginRight: "5%", marginLeft: "5%"}}>
													<Media left>
														<img style={{cursor: "pointer"}} width="60" height="60" alt={item.categoria} top className="categorias" onClick={() => {this.changeState(item.categoria,item.imgurl)}} src={item.imgurl} style={{marginRight: "1cm"}} />
													</Media>
													<Media body>
															<Media heading>
																<Button className="tituloCategoria" color="info" block onClick={() => {this.changeState(item.categoria,item.imgurl)}} >{item.categoria}</Button>
															</Media>
													</Media>
												</Media>

				      </div>

					</div>

				);
						})}

		</div>
	</div>

	<div className="col-md-8">
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

</div>

	</div>

  );

}
}

export default publicacionCard;
