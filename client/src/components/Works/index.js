import React from 'react'

export default function Works({ works }) {
    
    return (
    works.map( work => (
        <div className={'col carousel-cell'}>
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
        </div>
        ))
    )
}
