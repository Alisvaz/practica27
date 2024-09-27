import React, {Component} from "react";

class ComponenteCuatro extends Component {
    componentDidMount() {
        setTimeout(() => {
            console.log("Cuarto componente");
          }, 5000);
        }
    
    render() {
        return(
            <>
                <h4>Componente cuatro</h4>
            </>
        )
    }
}

export default ComponenteCuatro;