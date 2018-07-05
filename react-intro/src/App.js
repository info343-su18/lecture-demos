import React, { Component } from 'react';

class HelloMessage extends Component {
    render() {
        let message = "Hello World!";
        return <h1>{message}</h1>;
    }
}

class ButtonList extends Component {
    render() {

        let buttonArray = this.props.labels.map((label) => {
            return <Button key={label} text={label} size="lg" />;
        });

        return (
        <div>
            {buttonArray}
        </div>
        );
    }
}

class Button extends Component {
    render() {
        console.log(this.props);

        let className = "btn btn-primary rounded-circle";
        if(this.props.size === 'lg'){
            className += ' btn-lg';
        }

        return (
            <button className={className}>
                {this.props.text}
            </button>
        );
    }
}

export default class App extends Component {
    render() {

        let buttonLabels = [1,2,3,4,5,6,7,8];        

        return (
            <div>
                <header className="jumbotron">
                    <HelloMessage content={<h1>hello</h1>} />
                </header>
                <main>
                    <ButtonList labels={buttonLabels} />
                </main>
            </div>
        );
    }
}
