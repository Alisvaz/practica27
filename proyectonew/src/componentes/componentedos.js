import React, {Component} from "react";

class ComponenteDos extends Component {
    componentDidMount() {
        setTimeout(() => {
            console.log("Segundo componente");
          }, 3000);
        }

    render() {
        return(
            <>
                <h3>Componente dos</h3>
            </>
        )
    }
}

export default ComponenteDos;