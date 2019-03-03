import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Nav, NavItem, NavLink, UncontrolledDropdown , Navbar} from 'reactstrap';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
    }
  }

  onMouseEnter = () => {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave = () => {
    this.setState({ dropdownOpen: false });
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render () {
    return(
      <Nav>
        <NavItem>
          <h3>Curated News</h3>
        </NavItem>
        <NavItem>
          <NavLink href="/curated/home">HomePage</NavLink>
        </NavItem>
          <Dropdown nav onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav>
              Articles
            </DropdownToggle>
            <DropdownMenu component="div">
              <DropdownItem>
                <NavLink href="/curated/business">Business</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/curated/entertainment">Entertainment</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/curated/tech">Technology</NavLink>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        <NavItem>
          <NavLink href="#">Reviews</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Submit an Article</NavLink>
        </NavItem>
      </Nav>
    );
  }  
}
