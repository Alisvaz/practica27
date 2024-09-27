import React, {Component} from "react";

class Componentenuevo extends Component {
    componentDidMount() {
        setTimeout(() => {
            console.log("Nuevo componente");
          }, 4000);
        }

    render() {
        return(
            <>
                <h3>Componente nuevo</h3>
            </>
        )
    }
}

export default Componentenuevo;