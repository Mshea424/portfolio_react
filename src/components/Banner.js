import React, { Component } from 'react'
import Hello1 from '../images/hello_world1.png'
import Hello2 from '../images/hello_world2.png'

export default class Banner extends Component {
    state = {
        dash: true,
    }

    componentDidMount() {
        setInterval(this.toggleDash, 600)
    }

    toggleDash = ()=> {
        let newState = {...this.state}
        newState.dash = !newState.dash
        this.setState(newState)
    }
    render() {
        return (
            <div>
                {this.state.dash ? <div className="hello-world1"></div> :
                <div className="hello-world2"></div>}    
            </div>
        )
    }
}
