import React, { Component } from 'react';
import axios from 'axios';
import api from '../../services/github.js';

class Repo extends Component{
    state = {
        repos: []
    }

    async componentDidMount(){
        const response = await api.get('');
        this.setState({repos: response.data})
    }

    render(){
        const {repos} = this.state

        return (
            <div>
            {repos.map(item => (
                <p>{item.name}</p>
            ))}
            </div>
        )
    }
}
export default Repo;