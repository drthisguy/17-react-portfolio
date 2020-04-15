import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from '../Grid'
import List from '../List'
import BurgerBtn from '../BurgerBtn'
import { boot, mat } from './style'

export default function Navbar({ toggleNav }) {

    return (
        <nav className={boot.nav}>
            <div className={boot.collapse} id="navbarSupportedContent20">
                <Container classes={"py-2"} >
                    <Row classes={boot.row1}>
                        <Col size={"md-2"}>
                            <List />
                        </Col>
                        <Col size={"md-6"} classes={boot.col2}>
                            <div className={boot.flex}>
                                <span className={boot.span}></span>
                                <p><em>From the front end to the back, I am striving to make the web a better place with innovation as my passion and driving force.
                                <i className={mat.github}></i>
                                <a href="https://github.com/drthisguy" target="_blank" rel='noreferrer noopener'>GitHub Profile.</a> {"\n"}
                                <i className={mat.linkedin}></i>
                                <a href="https://www.linkedin.com/in/page-tyler-90933b52" target="_blank" rel='noreferrer noopener'>Linkedin Profile.</a>
                                </em></p>
                            </div>
                        </Col>
                        <Col size={"md-4"} classes={boot.col2}>
                            <p>
                                <h3>Hire Me</h3>
                                <h5>You know you wanna...</h5> {"\n"}
                                <a href="mailto:page.c.tyler@gmail.com">page.c.tyler@gmail.com</a> {"\n"}
                                <a href="tel:2672402298">(267) 240-2289</a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Link to="/" >Page Tyler</Link>
                <BurgerBtn toggleNav={toggleNav}></BurgerBtn>
            </Container>
        </nav>
    )
}
