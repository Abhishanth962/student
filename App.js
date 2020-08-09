import React, { Component } from 'react';

import './App.css';

class App extends Component {  
  constructor(){
    super()    

              this.state = {
                firstName: "",
                lastName: "",
                gender:"",
                dob:"",
                class:"",
                Divition:"",

              }
         this.handleChange=this.handleChange.bind(this)
            }

              handleChange(event) {
                this.setState({
                  [event.target.name] : event.target.value
                })
              }

            render() {
              return (
                
                <form onSubmit>{this.handleChange.submit}
                <p>Registration</p>
                <label>Name</label>
                  <input type="text" 
                  name="firstName" 
                  placeholder="First Name" required
                  onChange= {this.handleChange} />
                  
                  
                  <label>Last Name</label>
                  <input type="text" 
                  name="lastName" 
                  placeholder="Last Name" required
                  onChange= {this.handleChange} />
                  <br />

                  <label>Gender</label>
                  <input type="radio"
                    name="gender"
                    value="Male" required
                    checked={this.state.gender==="Male"}
                    onChange={this.handleChange}
                    /> Male
                    

                    <label>  
                  <input type="radio"
                    name="gender"
                    value="Female"
                    checked={this.state.gender==="Female"}
                    onChange={this.handleChange}
                    /> Female
                    </label><br></br>

                    <label>Date of Birth : </label>
                    <input type="text" 
                  name="dob" 
                  placeholder="Date Of Birth" required
                  onChange= {this.handleChange} />
                  <br></br>

                    <label>Class:</label>
                  <select
                  value={this.state.class}
                  onChange={this.handleChange} 
                  name="class"
                  >
                   <option> I </option>
            <option> II </option>
            <option> III </option>
            <option> IV </option>
            <option> V </option>
            <option> VI </option>
            <option> VII </option>
            <option> VIII </option>
            <option> IX </option>
            <option> X </option>
            <option> XI </option>
            <option> XII </option>
            </select> 

            <label>Divition:</label>
                  <select
                  value={this.state.Divition} 
                  onChange={this.handleChange}
                  name="Divition"
                  >
                    <option> A </option>
                    <option> B </option>
                    <option> C </option>
                    </select>
                    <br></br>
           
              <button>Submit</button>

                  <h1>Enterd Information</h1>
                  <h2>Name: {this.state.firstName} {this.state.lastName}</h2>
                  <h2>You are a : {this.state.gender}</h2>
                  <h2>Your Date of Birth Is :{this.state.dob}</h2>
                  <h2>You are in :{this.state.class} {this.state.Divition}</h2>
                  

                </form>
    ); 
  }
}



export default App;
