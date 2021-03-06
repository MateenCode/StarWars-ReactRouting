import React, {Component} from 'react';
// IMPORT NavLink <<<<<<<<<<<<<<<
import {NavLink} from 'react-router-dom';


export default class BaseLayout extends Component {
  render(){
    let headerStyle = {
      "textAlign": "center",
      "height": "30vw",
      "color": "#fff",
      "backgroundImage": "url(../images/header2.jpg)",
      "backgroundPosition": "center",
      "backgroundSize": "cover",
      "backgroundRepeat": "none",
      "boxShadow":"rgba(0, 0, 0, 0.22) -2px 9px 5px 0px",
    }
    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li>
                  {/* Add a NavLink set to the home page. Set the activeStyle to a color of yellow */}

                  <NavLink ActiveClassName="selected" activeStyle={{color: "yellow"}} className="nav-link" exact to="/">HOME</NavLink>

                </li>
                <li>
                  {/* Add a NavLink set to characters. Include activeClassName */}

                  <NavLink ActiveClassName="selected" activeStyle={{color: "white"}} className="nav-link" to="/Characters">Characters</NavLink>

                </li>
                <li>
                  {/* Add a NavLink set to starships. Include activeClassName */}

                  <NavLink ActiveClassName="selected" activeStyle={{color: "white"}}  className="nav-link" to="/Starships">Starships</NavLink>


                </li>
                <li>
                  {/* Add a NavLink set to films. Include activeClassName */}

                  <NavLink ActiveClassName="selected" activeStyle={{color: "white"}} className="nav-link" to="/Films">Films</NavLink>

                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12 header" style={headerStyle}>
          </div>
        </nav>
       {this.props.children}
        <footer className="col-lg-11">
          <span>
            SWAPI EXPLORER
          </span>
        </footer>
      </div>
    );
  }
}
