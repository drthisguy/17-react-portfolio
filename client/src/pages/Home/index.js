import React from 'react';
import { Container, Row, Col } from '../../components/Grid';
import LinkList from "../../components/LinkList";
import Works from "../../components/Works";
import { boot, custom } from "./style";

export default function Home({ portfolio }) {
    const clone = portfolio,
    topRow = clone.slice(0, 3)
    return (
        <div className={custom.flex}>
            <Container classes={custom.hello}>
                <Row classes={custom.spacing}>
                    <Col size={'md-12'} >
                        <Row classes={boot.alignRow} >
                            <Col size={'lg-6'} >
                                <h2>Hello, I'm Page Tyler</h2>
                                <p className={'mb-0'}>Industrious &amp; Professional Full Stack Developer</p>
                            </Col>
                            <LinkList />
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container classes={custom.carousel} >
                <Row classes="justify-content-center">
                    <Works works={topRow} />
                </Row>
            </Container>

            <Container classes={custom.skills} >
                <Row classes={custom.mern} >
                    <Col size={'md-12'} >
                        <img src={require('../../assets/img/mern-img.png')} className={custom.mern} alt={'MERN'}>
                        </img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
