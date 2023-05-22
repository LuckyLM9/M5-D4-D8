import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { colOne, colTwo, colThree } from '../Data/footerLinks'
import '../stile/footer.css';

function Myfooter() {
    console.log(colOne, colTwo, colThree);
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col>
                        <ul>
                            {colOne &&
                                colOne.map((item) => {
                                    return (
                                        <li key={item.title}> <a href={item.href}> {item.title}</a></li>
                                    );
                                })}
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            {colTwo.map((item) => {
                                return (
                                    <li key={item.title}><a href={item.href}>{item.title}</a></li>
                                );
                            })}
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            {colThree.map((item) => {
                                return (
                                    <li key={item.title}>{item.title}</li>
                                );
                            })}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Myfooter;
