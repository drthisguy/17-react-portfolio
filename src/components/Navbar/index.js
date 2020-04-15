import React, { useState } from 'react'
import { Container, Row, Col } from '../Grid'
import { boot } from 'style'

export default function Navbar() {

    const [navigator, setNavigator] = useState({ show: true });

    return (
        <nav className={boot.nav}>
            <div className={boot.collapse}>
                <Container classes={"py-2"} >
                    <Row classes={boot.row1}>
                        <Col size={"md-2"}>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        </nav>
    )
}
