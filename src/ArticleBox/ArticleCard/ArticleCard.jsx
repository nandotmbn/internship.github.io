import React, { Component } from 'react';
import { Col, Card, CardTitle } from 'react-materialize'
import './ArticleCard.css'
import '../Screen.css'

class ArticleCard extends Component {
    render() {
        return (
            <div>
                <Col l={3} m={4} s={12} >
                    <Card
                        className="article-card"
                        header={<CardTitle image={this.props.thumbnail} />}
                        horizontal
                    >
                        <a href="#1">{this.props.bait}</a>
                    </Card>
                </Col>
            </div>
        );
    }
}

ArticleCard.defaultProps = {
    thumbnail: "https://materializecss.com/images/sample-1.jpg",
    bait: "Here is the standard card with a horizontal image."
}

export default ArticleCard;