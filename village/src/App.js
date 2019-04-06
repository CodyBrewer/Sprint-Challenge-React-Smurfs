import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = styled.nav`
  display: grid;
  grid-template-columns: 20% 30% 30% 20%;
  grid-template-rows: 40px;

`
const MyNavLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
  }
`
const SmurfListLink = styled(MyNavLink)`
  grid-column-start: 2;
  
`
const SmurfFormLink = styled(MyNavLink)`

`
 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  componentDidMount(){
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => this.setState({ smurfs: response.data}))
      .catch(err => console.log(err));
  }
  addSmurf = newSmurf => {
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(response => {
        this.setState({ smurfs: response.data });
        console.log(this.state.smurfs);
      })
      .catch(err => console.log(err));
};
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
      <NavBar>
        <SmurfListLink to="/">Smurfs List</SmurfListLink>
        <SmurfFormLink to="/smurf-form">Add Smurf</SmurfFormLink>
      </NavBar>
        <Route exact path="/"
          render = {props => (
            <Smurfs{...props}
            smurfs={this.state.smurfs}
            />
          )}
        />
        <Route  
          path ="/smurf-form" 
          render={props=> <SmurfForm {...props} addSmurf={this.addSmurf} />}
        />
      </div>
    );
  }
}

export default App;
