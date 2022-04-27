import React, { Component } from 'react';
import "./generator.css";

function randomIntFromInterval(min, max) {
    let x = (Math.floor(Math.random() * (max - min +1)) + min);
    console.log((max - min +1) + min);
    return x;
}

class Generator extends Component {
    state = {
        randomNumber: 15,
        minimumNumber: 10,
        maximumNumber: 20
    }

    handleGenerate = () => {
        const min = this.state.minimumNumber;
        const max = this.state.maximumNumber;
        this.setState({
            randomNumber: randomIntFromInterval(min, max)
        });
    }

    handleMinChange = (event) => {
        this.setState({minimumNumber: parseInt(event.target.value)});
    }

    handleMaxChange = (event) => {
        this.setState({maximumNumber: parseInt(event.target.value)});
    }

    render() { 
        return (
            <React.Fragment>
                <input 
                    type='number'
                    placeholder={this.state.minimumNumber}
                    onChange={this.handleMinChange}
                />
                <input 
                    type='number' 
                    placeholder={this.state.maximumNumber}
                    onChange={this.handleMaxChange}
                />
                <button onClick={this.handleGenerate}>
                    Generate
                </button>
                <h2>{this.state.randomNumber}</h2>
            </React.Fragment>
        );
    }
}
 
export default Generator;