import React from 'react'

        
    export function Container ({ classes, children }) {
      return <div className={`container ${classes}`}>{children}</div>;
    }

    export function Row ({ classes, children }) {
      return <div className={`row ${classes}`}>{children}</div>;
    }
           
    export function Col ({ size, children }) {
       return ( 
            <div 
            className={size
             .split(" ")
             .map(size => "col-" + size)
             .join(" ")}
             >
           {children}
         </div>)
    }