import React, { Fragment } from 'react'
import { Col } from '../Grid'
import { useLocation } from 'react-router-dom'

export default function Works({ works }) {

    const { pathname } = useLocation();
    return (
    works.map( (work, i) => (
        <Col size='md-4' key={i} >
            <div className={'set-image-txt'}>
                <div className={'images'}>
                    <div className={'darken-txt'}>
                            <h4>{work.name}</h4>
                            <hr/>
                            <h6>{work.desc}</h6>
                    </div>
                    <a href={work.deploy} className={'darken'} target="_blank" rel="noreferrer noopener">
                        <img className={'img-fluid'} src={work.image} alt={work.name}/>
                    </a>
                </div>
            </div>
            { pathname === '/' ? <Fragment /> : 
            <a href={work.repo} style={{float:'right'}} target="_blank" rel="noreferrer noopener">Repo</a> }
        </Col>
        ))
    )
}
