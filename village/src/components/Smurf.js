import React from 'react';
import styled from 'styled-components';

const DeleteButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: white;
  color: Red;
  border: 2px solid white;
  &:hover{
    background:red;
    color: white;
  }
`


const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <DeleteButton onClick={()=>props.deleteSmurf(props.id)}>Delete</DeleteButton>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

