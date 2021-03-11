import React, { Component } from 'react';
import { Parallax, TextInput, Icon } from 'react-materialize'
import Banner1 from './assets/banner-parallax1.jpeg'
import './Banner.css'
import './Screen.css'

class Banner extends Component {
    ClickHandler() {
        window.location.href = "https://pens.ac.id"
    }
    componentDidMount() {
        const input = document.getElementById("TextInput-4");
        input.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) { 
              event.preventDefault();
              document.getElementById("search-id").click();
            }
          });
    }
    render() {
        return (
            <div id="banner">
                <div>
                    <Parallax
                        image={ 
                            <div>
                                <img className="banner-parallax1" alt="" src={Banner1}/> 
                            </div>
                        }
                        options={{
                            responsiveThreshold: 0
                        }}
                    />
                    <div className="banner-overlay">
                        <h4 className="white-text">Informasi terlengkap seputar perguruan tinggi di Indonesia</h4>
                        <TextInput
                            icon={<Icon id="search-id" onClick={this.ClickHandler}>search</Icon>}
                            id="TextInput-4"
                            label="Universitas, Institut, Politeknik, dsb..."
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;