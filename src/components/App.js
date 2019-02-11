import React from 'react';
import axios from 'axios';
import SearchBar from  './SearchBar'
import Profile from './Profile'


const client_id ='deaa79ba0cf3978a2bb7'
const client_secret="97a5df8bb799f35404769140c9fb937a65710e03"
class App extends React.Component{
    state={
        data:[]
    }
     onSearchSubmit= async (term)=>{
        axios.get(`https://api.github.com/users/${term}?client_id=${client_id}&client_secret=${client_secret}`)
        .then(response=>{
            console.log(response.data);
            this.setState({
                data:response.data
            })
        }).catch(err=>{
            console.log(err)
        })
        //    this.setState({
    //        images:response.data.results
    //    })
    //    console.log(this.state.images)
    }
    render(){    
            return (
                <div className="ui container">
                    <SearchBar onFromSubmit={this.onSearchSubmit}/>
                    
                    <Profile Profiledata ={this.state.data}/>
                </div>
            )
        } 
           }
     
export default App;