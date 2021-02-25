import React, { Component } from 'react'

/**
    Methode fleche
  */
const MyCars = (props) => {

        const ColorInfo = props.color ? ( <p>Couleur:  {props.color}</p>) : ( <p>Couleur: Neant</p>)
        if (props.children) {
                 return(
               <div style={{ backgroundColor:'pink', width:'400px' , padding: '10px', margin:"5px auto"}} >
                   <p>Marque: {props.children}</p>
                    {ColorInfo}
               </div>
          )
        } else {
                 return(
               <div style={{ backgroundColor:'pink', width:'400px' , padding: '10px', margin:"5px auto"}} >
                   <p>Pas de marque</p>
               </div>
          )
        }
         
}
export default MyCars;