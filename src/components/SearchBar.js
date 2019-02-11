import React, { Component } from 'react'

class SearchBar extends Component {
    state={
        term:'hestin-singh'
    }
    // handleInputChange=(event)=>{
    //     event.preventDefault();
        
    //     this.setState({
    //         term:event.target.value
    //     })
    // }
    onhandleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.term)
        this.props.onFromSubmit(this.state.term);
    }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onhandleSubmit} className="ui form"> 
            <div className="field">
                <label>Github profile search</label>
                <input value={this.state.term} type="text" onChange={e=>this.setState({term:e.target.value})} />
            </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
