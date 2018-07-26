import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {

  constructor(props){
	  super(props);
  }

  render() {
    return (
      <div id="menu">
        <header className="menu-header">
            <nav>
              <h3>{this.props.title}</h3>
            </nav>
        </header>
      </div>
    );
  }
}

export default Menu;
