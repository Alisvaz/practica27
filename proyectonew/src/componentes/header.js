import React, {Component} from "react";

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
    }

    handleButtonClick = () => {
        console.log('boton oprimido')
        this.setState({isLoggedIn : true})
    }

    render() {
        return(
            <>
                <h1>{this.props.appName}</h1>
                <button onClick={this.handleButtonClick}>Soy un boton</button>
                <p>{this.state.isLoggedIn ? 'bienvenidos' : 'NO estas conectado' }</p>
            </>
            
        )
    }
}

export default Header;