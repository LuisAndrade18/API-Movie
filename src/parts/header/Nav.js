import React, { Component } from 'react'
import { Navg, Ul} from '../../StyledComponents/HeaderStyled.js'

export default class Nav extends Component {
  render() {
    return (
      <>
        <Navg>
          <Ul>
            <li>Home</li>
            <li>News</li>
            <li>About us</li>
          </Ul>
        </Navg>
      </>
    );
  }
}
