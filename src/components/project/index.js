import React, { Component } from 'react';
import api from '../../services/github.js';
import styled from 'styled-components';

const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 15px;
    grid-row-gap: 15px;
`

const Project = styled.div`
    &hover {
        background-color: white;
    }
`

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
            <ProjectGrid>
                {repos.map((item, index) => (
                    <Project key={index.toString()} className="card">
                        <p className="subtitle">{item.name}</p>
                        {item.description}
                    </Project>
                ))}
            </ProjectGrid>
        )
    }
}
export default Repo;