import React, { Component } from 'react';
import {Row} from 'react-materialize'
import Cards from './Card/Card'
import './CampusBox.css'
import './Screen.css'
import PENS from './assets/pens.png'
import PPNS from './assets/ppns.jpg'
import POLBAN from './assets/polban.png'
import PNJ from './assets/pnj.jpg'
import POLINEMA from './assets/polinema.webp'
import UI from './assets/ui.png'
import ITB from './assets/itb.png'
import UGM from './assets/ugm.png'
import ITS from './assets/its.png'
import UNAIR from './assets/uner.png'
import NEXT from './assets/next.png'

class CampusBox extends Component {
    render() {
        return (
            <div id="campus-box">
                <div className="kind">
                    <h3 className="kinds">PERGURUAN TINGGI NON-VOKASI DI INDONESIA</h3>
                    <Row className="h-scroll">
                        <Cards title="Universitas Indonesia" logo={UI}></Cards>
                        <Cards title="Institut Teknologi Bandung" logo={ITB}></Cards>
                        <Cards title="Universitas Airlangga" logo={UNAIR}></Cards>
                        <Cards title="Institut Teknologi Sepuluh Nopember" logo={ITS}></Cards>
                        <Cards title="Universitas Gadjah Mada" logo={UGM}></Cards>
                        <Cards title="FIND OUT MORE......" logo={NEXT}></Cards>  
                    </Row>
                </div>
                <div className="kind">
                    <h3 className="kinds">PERGURUAN TINGGI VOKASI DI INDONESIA</h3>
                    <Row>
                        <Cards title="Politeknik Elektronika Negeri Surabaya" logo={PENS}></Cards>
                        <Cards title="Politeknik Negeri Malang" logo={POLINEMA}></Cards>
                        <Cards title="Politeknik Negeri Bandung" logo={POLBAN}></Cards>
                        <Cards title="Politeknik Perkapalan Negeri Surabaya" logo={PPNS}></Cards>
                        <Cards title="Politeknik Negeri Jakarta" logo={PNJ}></Cards>
                        <Cards title="FIND OUT MORE......" logo={NEXT}></Cards>  
                    </Row>
                </div>
            </div>
        );
    }
}

export default CampusBox;