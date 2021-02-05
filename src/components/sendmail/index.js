import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    background: var(--bg0);
    color: var(--green);
    border: none;
    width: 100%;
    box-sizing: border-box;
    padding: 15px;
    border-radius: 10px;

    &:focus{
        outline: none;
    }

    @media(min-width: 900px){

    }

`
const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;

    @media (min-width: 900px){
        flex-direction: row;
    }
`


class FormEmail extends Component{
    submit = (event) => {

    }
    render(){
        return(
            <form>
                <Contact>
                    <Input type="text" />
                    <p className="normal">or</p>
                    <Input type="text" />
                </Contact>
                <Input type="text" />
                <textarea />
            </form>
        )
    }
}

export default FormEmail;