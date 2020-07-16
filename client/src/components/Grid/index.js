import React from 'react'

        
export const Container = ({ classes, children }) => <div className={classes ? `container ${classes}`: 'container'}>{children}</div>

export const Collapse = ({ classes, children, id }) => <div className={classes} id={id}>{children}</div>

export const Row = ({ classes, children }) => <div className={classes ? `row ${classes}`: 'row'}>{children}</div>

export const Col = ({ size, classes, children }) => {
    const theClass = classes ? classes : ''
    return ( <div 
        className={size.split(' ').map( size => `col-${size}`).join(' ')
        +" "+ theClass}>{children}
        </div>
    )
}       
    
