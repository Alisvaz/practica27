import React, {Component} from "react";

class ComponenteUno extends Component {
    componentDidMount() {
        setTimeout(() => {
            console.log("Primer componente");
          }, 2000);
          
    }

    render() {
        return(
            <>
                <h2>Componente uno</h2>
            </>
        )
    }
}

export default ComponenteUno;