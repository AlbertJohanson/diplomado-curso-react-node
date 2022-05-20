import React, { Component } from 'react';

import './Buttons.css';

class Button extends Component {
    constructor(props) {
        super(props);
        
            this.handleChangeTitle = this.handleChangeTitle.bind(this);
       
}
    

    handleChangeTitle (){
        // this.props.onClick('New Title');
    }
    render() {
        return (
            <button className="Button" onClick={this.props.handleChangeTitle}>
              {this.props.textButton}
            </button>
        );
    }
}

export default Button;
