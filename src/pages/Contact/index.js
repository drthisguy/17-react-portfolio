import React, { Component } from 'react'
import { Container, Row, Col } from '../../components/Grid';
import LinkList from "../../components/LinkList";
import { boot, custom } from './style'

export default function Contact() {



    return (
        <div className={custom.flex}>
            <Container classes={custom.contact} >
                <Row >
                    <Col size={'md-12'} >
                        <Row classes={boot.alignRow} >
                            <Col size={'lg-6'} >
                                <h2>Reach Out</h2>  
                                <p style={{marginBottom:'0px'}}>
                                    If you're a business seeking a web presence or an employer looking to hire, you can get a hold of me here.  Talk to you soon.
                                </p>
                            </Col>
                            <LinkList />
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container classes={custom.reach}>
                <Row >
                    <Col size={'md-12'} >
                        <div className={boot.card}>
                            <form className={boot.body}>
                                <h2 className={boot.header}>Contact</h2>
                                <div className={boot.group}>
                                    <label>Name</label>
                                    <input className={boot.ctrl} type="text" placeholder="Your Name"/>
                                </div>
                                <div className={boot.group}>
                                    <label>email</label>
                                    <input className={boot.ctrl} type="email" placeholder="youremail@example.com"/>
                                </div>
                                <div className={boot.group}>
                                    <label>Name</label>
                                    <textarea className={boot.ctrl} rows="6" placeholder="Type your message here..."/>
                                </div>

                                <Col size={'md-12'} classes={boot.btn} >
                                    <button className={boot.bigBtn} type="button">Submit</button>
                                </Col>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
