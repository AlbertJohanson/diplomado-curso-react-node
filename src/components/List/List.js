import React, { Component } from 'react';
import './List.css';

class List extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <ul>
                    <li>{this.props.children}</li>
                </ul>
            </div>
        );
    }
}

export default List;
