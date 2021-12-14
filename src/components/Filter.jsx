import React, { Component } from "react";
import { useState } from "react";

class Filter extends Component{
   
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            fitness_level: '',
            personal_goal: '',


        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
            this.props.filterUsers(this.state)
        
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>First Name:</label>
                <input name="first name" onChange={this.handleChange} value={this.state.firstName} />
                <label>Last Name:</label>
                <input name="last name" onChange={this.handleChange} value={this.state.lastName} />
                <label>Age:</label>
                <input name="age" onChange={this.handleChanage} value={this.state.age} />
                <label>Gender:</label>
                <input name="gender" onChange={this.handleChange} value={this.state.gender} />
                <label>Fitness Level</label>
                <input name="fitness level" onChange={this.handleChange} value={this.state.fitness_level} />
                <label>Personal Goal</label>
                <input name="personal goal" onChange={this.handleChange} value={this.state.personal_goal} />
                <button type="submit">Create Buddy</button>
            </form>
        )
    }
}





export default Filter;