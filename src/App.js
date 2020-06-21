import React from 'react'
import './mysass.scss'

class MyForm extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            username: ''
        };

    }

    inputSubmitHandler = e => {
        e.preventDefault();
        alert(`You are submitting ${this.state.username}`)
    }

    inputChangeHandler = e => {

        this.setState(
            { username: e.target.value }
        )

    }

    render() {
        let header = '';
        if(this.state.username)
            header = <h1>Hello { this.state.username }</h1>
        else
            header = ''

        return (
            <form onSubmit={ this.inputSubmitHandler }>
                { header }
                <p>Enter your name: </p>
                <input type="text" onChange={ this.inputChangeHandler }/>
                <input type="submit"/>
            </form>
        )

    }

}

export default MyForm