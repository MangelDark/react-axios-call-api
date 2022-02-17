import React, { Component } from 'react'
import axios from 'axios';
export default class PersonList extends Component {

    state = {
        persons:[]
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp => {
            const persons =  resp.data;
            this.setState({persons});
        })
    }

  render() {
    return (
        <>
         <div>PersonList</div>
         <ul>
             {
                 this.state.persons.map(person => <li key={person.id}>{person.name}</li>)
             }
         </ul>
        </>
     
    )
  }
}
