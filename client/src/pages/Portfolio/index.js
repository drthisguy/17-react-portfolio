import React from 'react';
import { Container, Row, Col } from '../../components/Grid';
import LinkList from "../../components/LinkList";
import Works from "../../components/Works";
import { boot, custom } from "./style";

export default function Home({ portfolio }) {

    const row1 = portfolio.filter((x, i) => i < 3),
        row2 = portfolio.filter((x, i) => i > 2 && i < 6 ),
        row3 = portfolio.filter((x, i) => i > 5 );
    
    return (
        <div className={custom.flex}>
            <Container classes={custom.hello}>
                <Row >
                    <Col size={'md-12'} >
                        <Row classes={boot.alignRow} >
                            <Col size={'lg-6'} >
                                <h2>My Portfolio:</h2>
                                <p className={"mb-0"}>Have a look at some of the projects I've worked on.</p>
                                <p className={"mb-0"}>To find more repos, check out my <a href="https://github.com/drthisguy"
                                    target="_blank" rel="noreferrer noopener">GitHub Profile.</a></p>
                            </Col>
                            <LinkList />
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container classes={custom.previews} >
                <Row >
                    <Works works={row1} 
                    />
                </Row>
            </Container>
            <Container classes={custom.previews} >
                <Row classes={custom.spacing}>
                    <Works works={row2} 
                    />
                </Row>
            </Container>
            <Container classes={custom.previews} >
                <Row classes={custom.spacing}>
                    <Works works={row3} 
                    />
                </Row>
            </Container>
        </div>
    )
}
