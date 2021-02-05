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
    transition: 0.2s;
    &:hover {
        transform: scale(1.05);
        box-shadow: 3px 3px 2px var(--pink);
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
                        <br />
                        <p className="subtitle">{item.name}</p>
                        <p className="normal">{item.description}</p>
                        <br />
                    </Project>
                ))}
            </ProjectGrid>
        )
    }
}
export default Repo;