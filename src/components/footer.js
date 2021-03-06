import React from "react";
import Link from "gatsby-link";
import facebook from "../styles/icons/social/facebook.png";
import gmail from '../styles/icons/social/gmail.png'
import instagram from "../styles/icons/social/instagram.png";

const Footer = (props) => {
  const ministryLinks = props.ministryEdges.map((ministry,i) => {
    return <li key={i * Math.random() * 100}><Link to={`/ministry/${ministry.node.path}`}>{ministry.node.title}</Link></li>
  })
  return (
    <div className="footer">

      <div className="footer-connect">
        <div className="container ">
          <div className="column cols is-10 is-offset-1">
            <div className="col">
              <div>
                <h4>Logistics</h4>
                <p>Locations: 845 Pepperwood Ln, Iowa City, IA 52240</p>
                <p>Phone: (319) 354-3331</p>
              </div>
            </div>
            <div className="col">
              <div className="social">
                <a href="gnbc2@goodnewsiowacity.com">
                  <img src={gmail} />
                </a> 
                <a href="https://www.instagram.com/goodnewsbiblechurchic/?hl=en">
                  <img src={instagram} />
                </a>
                <a href="https://www.facebook.com/goodnewsiowacity/">
                  <img src={facebook} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="footer-links">
        <div className="container">
          <div className="column is-10 is-offset-1">
          <div>
              <h3>About</h3>
              <ul>
                <li><Link to="/about/staff">Staff</Link></li>
                <li><Link to="/about/cross-culture">Cross Culture</Link></li>
                <li><Link to="/about/core-values">Core Values</Link></li>
                <li><Link to="/about/beliefs">Beliefs</Link></li>
              </ul>
            </div>
            <div>
              <h3>Ministry</h3>
              <ul>
                {ministryLinks}
              </ul>
            </div>
            <div>
              <h3>Media</h3>
              <ul>
                <li><Link to="/media">Messages</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-reserved">
        <div className="container">
          <div className="column is-10 is-offset-1">
            <h3>Good News Bible Church</h3>
            <p>All rights reserved. GNBC 2018.</p>
          </div>
        </div>
      </div>
    </div>)
};

export default Footer;

