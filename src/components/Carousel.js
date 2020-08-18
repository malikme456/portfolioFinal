import React from 'react';

import Card from '../components/Card';

import devgrub from '../assets/images/goku.png';
import backImage from '../assets/images/backImage.jpg';
import evverest from '../assets/images/devgrub.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Web Dev',
                    subTitle: 'Mark your Presence',
                    imgSrc: devgrub,
                    link: 'https://www.fiverr.com/share/NeRy48',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Content Writing',
                    subTitle: 'Fiverr Gig',
                    imgSrc: backImage,
                    link: 'https://www.fiverr.com/share/Zo8QW8',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Marketing',
                    subTitle: 'Promote you business',
                    imgSrc: evverest,
                    link: 'https://malikme456.github.io/mesite/',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;