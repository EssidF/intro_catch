import React from 'react';
import "../css/style.scss";
import "../css/responsive.css";
import "../css/bootstrap.css";
import "../css/style.css";
import insta from "../images/instagram.png";
import linked from "../images/linkedin.png";
import twiter from "../images/twitter.png";


const Footer = (props) => {
  return (
    <footer>
    <small>
         
  <section class="info_section layout_padding-top layout_padding2-bottom" height="50px">
    <div class="container">
      <div class="box">
        <div class="info_form">
          <h4>
            Subscribe Our Newsletter
          </h4>
          <form action="">
            <input type="text" placeholder="Enter your email"/>
            <div class="d-flex justify-content-end">
              <button>

              </button>
            </div>
          </form>
        </div>
        <div class="info_links">
          <ul>
            <li class=" ">
              <a class="" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="">
              <a class="" href="#"> About</a>
            </li>
            <li class="">
              <a class="" href="#"> Services </a>
            </li>
            <li class="">
              <a class="" href="#"> News</a>
            </li>
            <li class="">
              <a class="" href="#">Contact Us</a>
            </li>
            <li class="">
              <a class="" href="#">Login</a>
            </li>
          </ul>
        </div>
        <div class="info_social">
          <div>
            <a href="">
              <img src="../images/fb.png" alt=""/>
            </a>
          </div>
          <div>
            <a href="">
              <img src={twiter} alt=""/>
            </a>
          </div>
          <div>
            <a href="">
              <img src={linked} alt=""/>
            </a>
          </div>
          <div>
            <a href="">
              <img src={insta} alt=""/>
            </a>
          </div>
        </div>
      </div>
    </div>

  </section>
      </small>
  </footer>
  
  )};

export default Footer;