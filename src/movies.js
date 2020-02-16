import React, { Component } from 'react';
class Movies  extends Component {

    render() { 
        return ( 

            <div className="movies"> 
                {this.props.lstofmovies.map((el,i) => 
                
                <div key={i} className='movie-info'>
                    <img src={el.src} />
                    <span> {el.name} </span>
                    <span> {el.date} </span>
                    <span> {el.rate}</span>   
                    
                    </div>   )}
                
          </div>
                

         );
    }
}
 
export default Movies ;