import React, { Component } from 'react';
import './Footer.css'
import './Screen.css'

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div className="footer-title">
                    <h5>KAMPUS INDONESIA</h5>
                    <strong>Mengabdi untuk negeri</strong>
                </div>
                <div className="footer-dept">
                    <h5>DEPARTMENTS</h5>
                    <div className="flex-row lists-dept">
                        <ul>
                            <li className="list-dept"><a href="#1">Human Resource Development</a></li>
                            <li className="list-dept"><a href="#1">Administration</a></li>
                            <li className="list-dept"><a href="#1">Creative Writer</a></li>
                            <li className="list-dept"><a href="#1">Social Media Officer</a></li>
                            <li className="list-dept"><a href="#1">Graphic Designer</a></li>
                            <li className="list-dept"><a href="#1">Digital Marketing</a></li>
                            <li className="list-dept"><a href="#1">Bussiness Management</a></li>
                        </ul>
                        <ul>
                            <li className="list-dept"><a href="#1">Project Officer</a></li>
                            <li className="list-dept"><a href="#1">Public Relation</a></li>
                            <li className="list-dept"><a href="#1">Academic Team</a></li>
                            <li className="list-dept"><a href="#1">Community Development</a></li>
                            <li className="list-dept"><a href="#1">Back-End Development</a></li>
                            <li className="list-dept"><a href="#1">Front-End Development</a></li>
                            <li className="list-dept"><a href="#1">UI/UX Designer</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-contact">
                    <h5>CONTACTS</h5>
                    <ul>
                        <li className="list-contact">Malang</li>
                        <li className="list-contact">Jawa Timur, Indonesia</li>
                        <li className="list-contact">+6280000000000</li>
                        <li className="list-contact">kampusindonesia@gmail.com</li>
                        <li className="list-contact">pintara.id</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;