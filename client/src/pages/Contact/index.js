import React, { useState } from 'react'
import { Container, Row, Col } from '../../components/Grid';
import LinkList from "../../components/LinkList";
import API from '../../util/API'
import { Input, TextArea, Button } from '../../components/Form'
import { boot, custom } from './style'

export default function Contact() {

    const [alert, toggleMessage] = useState({show: false}),

    [email, setEmail] = useState({}),

    onInputChange = e => {
        const { name, value } = e.target;
        setEmail({...email, [name]: value })
    },

    handleSubmit = async e => {
        e.preventDefault()
        e.target.reset();

        const { data } = await API.postMail(email)
        
            if (data.status === 'success') {
            toggleMessage({
                show: true,
                color: 'green',
                alert: 'Message Sent!',
            })
        }   else if (data.status === 'fail') {
            toggleMessage({
                show: true,
                color: 'red',
                alert: 'Message failed to send.',
            })
        }  
    }
     
    
    return (
        <div className={custom.flex}>
            <Container classes={custom.contact} >
                <Row >
                    <Col size={'md-12'} >
                        <Row classes={boot.alignRow} >
                            <Col size={'lg-6'} >
                                <h2>Reach Out</h2>  
                                <p style={{marginBottom:'0px'}}>
                                    If you're an employer looking to the right hire or business seeking a web presence or, you can get a hold of me here.  I look to hearing you.
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
                            <form onSubmit={handleSubmit} className={boot.body}>
                                <h2 className={boot.header}>Contact</h2>
                                <Row >
                                <Col size='md-6' >
                                <div className={boot.group}>
                                    <label>Name:</label>
                                    <Input onChange={onInputChange} 
                                    name="name" type="text" placeholder="Art Vandelay"/>
                                </div>
                                </Col>
                                <Col size='md-6' >
                                <div className={boot.group}>
                                    <label>Company:</label>
                                    <Input onChange={onInputChange} 
                                    name="company" type="text" placeholder="Vandelay Industries" />
                                </div>
                                </Col>
                                </Row>
                                <Row >
                                <Col size='md-6' >
                                <div className={boot.group}>
                                    <label>Email:</label>
                                    <Input onChange={onInputChange} 
                                    name="email" type="email" placeholder="art@vandelayindustries.com"/>
                                </div>
                                </Col>
                                </Row>
                                <div className={boot.group}>
                                    <label>Message:</label>
                                    <TextArea onChange={onInputChange} 
                                    name="message" rows="6" placeholder="Type your message here..."/>
                                </div>

                                <Col size={'md-6'} classes={boot.btn} >
                                    <Button type="submit">Submit
                                     </Button>
                                </Col>
                                <Col size={'md-6'} classes={boot.btn} >
                                   {alert.show && <Messenger msg={alert.alert} color={alert.color} />}
                                </Col>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const Messenger = ({ msg, color }) => <p style={{color: color}}>{msg}</p>