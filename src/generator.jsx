import React, { Component } from 'react';

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

class Generator extends Component {
    state = {
        randomNumber: 75,
        minimumNumber: 50,
        maximumNumber: 100
    }

    handleGenerate = () => {
        this.setState({
            randomNumber: randomIntFromInterval(
                this.state.minimumNumber,
                this.state.maximumNumber
            )
        });
    }

    handleMinChange = (event) => {
        this.setState({minimumNumber: event.target.value});
    }

    handleMaxChange = (event) => {
        this.setState({maximumNumber: event.target.value});
    }

    render() { 
        return (
            <React.Fragment>
                <h2>{this.state.randomNumber}</h2>
                <input 
                    type='number' 
                    placeholder='minimum' 
                    onChange={this.handleMinChange}
                />
                <input 
                    type='number' 
                    placeholder='maximum'
                    onChange={this.handleMaxChange}
                />
                <button onClick={this.handleGenerate}>
                    Generate
                </button>
                <h3>{this.state.minimumNumber}</h3>
                <h3>{this.state.maximumNumber}</h3>
            </React.Fragment>
        );
    }
}
 
export default Generator;