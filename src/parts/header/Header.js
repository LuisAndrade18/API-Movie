import React, { Component } from 'react';
import {Head} from '../../StyledComponents/HeaderStyled.js'
import Nav from './Nav.js';
import Search from './Search.js'

export default class Header extends Component {
  render() {
    return (
      <Head>
        <h1>PiraTecs</h1>
        <Nav />
        <Search/>
      </Head>
    );
  }
}
