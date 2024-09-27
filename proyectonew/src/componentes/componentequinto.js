import React, {Component} from "react";

class Quinto extends Component {
    componentDidMount() {
        setTimeout(() => {
            console.log("Quinto componente");
          }, 7000);
        }

    render() {
        return(
            <h3>Quinto componente</h3>
        )
    }

}

export default Quinto;