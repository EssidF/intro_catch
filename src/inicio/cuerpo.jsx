import React from 'react'
import wifi from '../imagenes/wifii.png'
import rapido from '../imagenes/rapido.png'
import seguro from '../imagenes/seguro.png'
import celular from '../imagenes/celularFondo.png'
import mobil from "../images/mobile.png"
import appstore from "../images/appstore.png"
import playsotre from "../images/playstore.png"
import quote from "../images/quote.png"
import client2 from "../images/client-2.png"
import client1 from "../images/client-1.png"
import black from "../images/repairing-service-black.png"
import black2 from "../images/delivery-man-black.png"
import black3 from "../images/shield-black.png"
import white3 from "../images/shield-white.png"
import white2 from "../images/delivery-man-white.png"
import white from "../images/repairing-service-white.png"
import "../css/style.scss";
import "../css/responsive.css";
import "../css/bootstrap.css";
import "../css/style.css";

const Cuerpo = (props) => (
<div>   <main id="main-wrapper">
        <section className="intro">
            <h1 className="titulo"><strong>Un taxi quand vous en avez besoin</strong></h1>
            <img id="celularFondo" src={celular} alt=""/>		
        </section>	
         <section className="info P1">
        <div className="izquierda">        
            <img src={rapido} alt=""/>	
        </div>		
        <div className="derecha">
            <h2 className= "tituloInfo">Un service contre la montre</h2>		
            <p>Ils cherchent un taxi.  Le client est très important, le client sera suivi par le client. Entier le plus grand ullamcorper ligula a dignissim. Le lit de Maecenas Lacinia n'est pas fait de biens immobiliers.</p>
        </div>
        </section>		

        <section id="parallax1">
            <div id="para1Text"><h2>Compatible avec les appareils mobiles</h2></div><div id="para1Img"></div>						
        </section>
        <section id="parallax2">
            <div id="para2Img"></div><div id="para2Text"><h2>Travaille avec nous</h2></div>
        </section>
 
    </main>

 




    <section class="app_section layout_padding2">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="detail-box">
            <h2>
              Download Our app
            </h2>
            <div class="text-box">
              <h5>
                details
              </h5>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when distribution of letters
              </p>
            </div>
            <div class="text-box">
              <h5>
                How it works
              </h5>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when distribution of letters
              </p>
            </div>
            <div class="btn-box">
              <a href="">
                <img src={playsotre} alt=""/>
              </a>
              <a href="">
                <img src={appstore} alt=""/>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="img-box">
            <img src={mobil} alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>
 

  <section class="why_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>
          Why <br/>
          Choose Us
        </h2>
      </div>
      <div class="why_container">
        <div class="box">
          <div class="img-box">
            <img src={white2} alt="" class="img-1"/>
            <img src={black2} alt="" class="img-2"/>
          </div>
          <div class="detail-box">
            <h5>
              Best Drivers
            </h5>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
            </p>
          </div>
        </div>
        <div class="box">
          <div class="img-box">
            <img src={white3} alt="" class="img-1"/>
            <img src={black3} alt="" class="img-2"/>
          </div>
          <div class="detail-box">
            <h5>
              Safe and Secure
            </h5>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
            </p>
          </div>
        </div>
        <div class="box">
          <div class="img-box">
            <img src={white} alt="" class="img-1"/>
            <img src={black} alt="" class="img-2"/>
          </div>
          <div class="detail-box">
            <h5>
              24x7 support
            </h5>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>


    </div>
 
);

export default Cuerpo;