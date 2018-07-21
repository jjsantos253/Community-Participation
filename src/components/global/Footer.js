import React from 'react';
import {SocialIcon} from 'react-social-icons';
import './css/navbar.css';

class Footer extends React.Component {

render() {
  return (


        <footer className="footer">
          <hr />
          <div className="row">

              <div className="col-md-4">
                  <div>
                      <span class="glyphicon glyphicon-grain" aria-hidden="true"></span>
                      Santo Domingo, Republica Dominicana.
                  </div>

                  <div>
                      <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span>
                      (809) 973-0701
                  </div>

                  <div>
                      <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
                      info@participacioncomunitaria.com.do
                  </div>
              </div>

              <div className="col-md-4">
                  <SocialIcon url="https://twitter.com/RDParticipa" network="twitter" />
                  <SocialIcon url="https://www.facebook.com/PCRDominicana" network="facebook"  />

              </div>

              <div className="col-md-4 copyright">
                  <p>Copyright &copy; 2018 - Participacion Comunitaria</p>
                  <p><a href="/terminos-de-uso-y-privacidad">Terminos de uso y privacidad</a></p>
              </div>
  <br/>
          </div>

 </footer>

  );

}
}

export default Footer;
