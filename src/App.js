import React, { Component } from 'react';
import Header from './Header/Header'
import Banner from './Banner/Banner';
import CampusBox from './CampusBox/CampusBox';
import InfoBox from './InfoBox/InfoBox';
import ArticleBox from './ArticleBox/ArticleBox';
import Footer from './Footer/Footer';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Banner></Banner>
        <InfoBox></InfoBox>
        <CampusBox></CampusBox>
        <ArticleBox></ArticleBox>
        <Footer></Footer>
      </div>
    );
  }
}
export default App;