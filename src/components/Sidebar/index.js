import React from 'react';
// https://github.com/negomi/react-burger-menu#animations
import { stack as Menu } from "react-burger-menu";
import Logout from '../Logout';

export default props => {
    return (
    <Menu {...props}>
      <a className="menu-item" href="/">
        Posição
      </a>

      <a className="menu-item" href="/operations">
        Operações
      </a>

      <a className="menu-item" href="/darf">
        DARF
      </a>
      <br />
      <button onClick={(e) =>{e.preventDefault();}  } className="menu-item" >
        <Logout />
      </button>
    </Menu>
    );
  }