import React from "react";
import '/Users/santiago/Documents/Coding/react1/preentrega1-albano/src/Componentes/title/style.css'
export const Title = (props) => {
   console.log(props);
    return(

    <h1>{props.greeting}</h1>
    );
}

export default Title;