import React, { Component } from 'react'
import API from '../../actions/api';

export default class PersonPost extends Component {
    state ={
        name:'',
        email:'',
        phone:'',
        username:'',
        pokemon:[],
        website: ''
    }

    componentDidMount(){
        API.get(`https://pokeapi.co/api/v2/pokemon?limit=10
        `)
        .then(resp =>{ this.setState({pokemon:resp.data.results})})
        
        .catch(error=>{
            console.log(error);
        })
    }


    handleChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }   

    handleSubmint = event =>{
        event.preventDefault();
        
        const user =  {
            name:       this.state.name,
            email:      this.state.email,
            phone:      this.state.phone,
            username:   this.state.username,
            website:    this.state.website
        }

        API.post(`Users/`,{user})
        .then(resp =>{
            console.log(resp);
            console.log(resp.data)
        }).catch(error =>{
            console.log(error);
        });
    }


  render() {
   console.log(this.state.pokemon)
    return (
      <>
        <form onSubmit={this.handleSubmint}>
            <label>Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <label>Person User Name:
            <input type="text" name="username" onChange={this.handleChange} />
            </label>
            <label>Person phone:
            <input type="text" name="phone" onChange={this.handleChange} />
            </label>
            <label>Person Email:
            <input type="email" name="email" onChange={this.handleChange} />
            </label>
            <label>Person Select Pokemon:
                <select name="website" onChange={this.handleChange}>
                    {
                       this.state.pokemon.map(resp =>  <option key={resp.name} value={resp.name}>{resp.name}</option>)
                    }             
                </select>
            </label>
            <button type="submit">Add</button>
        </form>
      </>
    )
  }
}
