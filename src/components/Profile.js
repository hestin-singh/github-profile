import React from 'react';
import './Profile.css'

const ImageList =(props)=>{
    const data  =props.Profiledata;
    console.log(props.Profiledata)
    return(
       <div className="grid-container">
            <div className="ui">
            <img className="profileImg" src={data.avatar_url}  />
            
            </div>
            <h2>User name :{data.login}</h2>
            
        
        <div><h2>Bio </h2><p>{data.bio} </p>
        <div className= "repo">
        <span>Repsostires: {data.public_repos}</span>
        <span>Followers :{data.followers}</span>
        </div>
        </div>
           
       </div>
       
    )
}
export default ImageList