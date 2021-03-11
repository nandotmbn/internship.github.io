import React, { Component } from 'react';
import { Col, Card, CardTitle, Icon} from 'react-materialize'
import './Card.css'
import '../Screen.css'

class Cards extends Component {
    render() {
        return (
            <div>
                <Col
                    m={2}
                    s={4}
                >
                    <Card                    
                        closeIcon={<Icon>close</Icon>}
                        header={<CardTitle image={this.props.logo}></CardTitle>}
                        revealIcon={<Icon>more_vert</Icon>}
                    >
                        <h6 className="univ-name"><a href="#1">{this.props.title}</a></h6>
                    </Card>
                </Col>
            </div>
        );
    }
}

export default Cards;