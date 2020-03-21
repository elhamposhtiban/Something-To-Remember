import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faInstagram,
  faFacebook,
  faGithub,
  faTwitter,
  faPinterest
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <footer className="footer">
              <div className="row">
                  <div className="col-1-of-3">
                      <div className="footer__navigation">
                          <ul className="footer__list">
                              <li className="footer__item"> <a href="https://github.com/elhamposhtiban" className="footer__link"><FontAwesomeIcon className="fa-3x media-link" icon={faInstagram}/></a> </li>
                              <li className="footer__item"> <a href="#" className="footer__link"><FontAwesomeIcon className="fa-3x media-link" icon={faFacebook}/></a> </li>
                              <li className="footer__item"> <a href="#" className="footer__link"><FontAwesomeIcon className="fa-3x media-link" icon={faTwitter}/></a> </li>
                              <li className="footer__item"> <a href="mailto:elham.poshtiban@gmail.com" className="footer__link"><FontAwesomeIcon className="fa-3x media-link" icon={faGithub}/></a> </li>
                              <li className="footer__item"> <a href="#" className="footer__link"><FontAwesomeIcon className="fa-3x media-link" icon={faPinterest}/></a> </li>
                          </ul> 
                      </div>
                  </div>
                  <div className="col-2-of-3">
                      <p className="footer__copyright">
                           copyright &copy; by Elham Poshtiban & Makah Abutahoun.
                           <br/>
                            you are 100% allowed to use this webpage for both personal and commercial use but NOT to claim it as your own design.A credit to authors, Elham poshtiban & Makah Abutahoun, is of course highly appreciated!
                      </p>
                  </div>
              </div>
          </footer>
    )
}


export default Footer;
