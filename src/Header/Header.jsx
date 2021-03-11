import React, { Component } from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize';
import Logo from './kampusIndonesia.png'
import './Header.css';
import './Screen.css';
import $ from "jquery"


class Header extends Component {
    state = {
		bgNavbar : " grad-background ",
		classNavbar : " header "
	};
	componentDidMount(){
		window.addEventListener("scroll", this.handleScroll);
		$('a[href^="#header"]').on('click',function (e) {
            var target = this.hash,
			$target = $(target);	
		   $('html, body').stop().animate({
			 'scrollTop': $target.offset().top-100
			}, 100, 'swing', function () {
			 window.location.hash = target;
			});
		});
		
	};
	handleScroll=()=>{
		if (window.pageYOffset > 1) {
			this.setState({bgNavbar : " "});

		} else if (window.pageYOffset < 1) {
			this.setState({bgNavbar : " grad-background "});
		}
	};

    render() {
        return (
            <div id="header">
                <Navbar
                    className={this.state.bgNavbar + this.state.classNavbar}
                    alignLinks="right"
                    brand={<img src={Logo} alt="Logo"/>}
                    centerChildren
                    id="mobile-nav"
                    menuIcon={<Icon>menu</Icon>}
                    options={{
                        draggable: true,
                        edge: 'left',
                        inDuration: 500,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 200,
                        preventScrolling: true
                    }}
                    >
                    <div className="navs main-nav flex-row">
                        <NavItem className="nav-menus"> Kampus </NavItem>
                        <NavItem className="nav-menus"> Program Studi </NavItem>
                        <NavItem className="nav-menus"> Jurusan </NavItem>
                        <NavItem className="nav-menus"> Blog </NavItem>
                    </div>
                    <div className="navs account-nav flex-row">
                        <NavItem className="nav-menus"> Sign In </NavItem>
                        <NavItem className="nav-menus"> Sign Up </NavItem>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;