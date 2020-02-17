import React, { Component } from 'react';
import './App.css';
import Movies from './movies';
import HOC from './HOC.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      listmov: [{src:"https://myegy.io/files/img/content/9/541/1575724695.500_1000.jpg", name: 'Jumanji: The Next Level',date: 2019, rate: '☆☆☆☆' },
                {src:'https://images-na.ssl-images-amazon.com/images/I/51leiIQ5zpL._SX359_BO1,204,203,200_.jpg',name: 'Frozen II',date: 2019, rate: '☆☆☆' } ,
                {src:'https://i.ytimg.com/vi/r0n2fBeRUGs/maxresdefault.jpg', name: 'Extrême tension',date: 2019, rate: '☆☆☆☆' }] ,

       display:'modal',
      findName:'',
      Ptname:'',
      Ptimage:'',
      Ptdate:0,
      Ptrate:'',
      
     }


  }

  modalFunct=()=>{
    this.setState( { display:'modal2'})
  }
  
  findMovie=(e)=>{
    this.setState({findName:e.target.value});

  }
  
  searchFunct=()=>{

     const fltrList= this.state.listmov.filter(el=> el.name.toUpperCase().includes(this.state.findName.toUpperCase()) )
     this.setState({listmov:fltrList })
     
  }
startFunct=(n)=>{
var starlength=n
const fltrList2= this.state.listmov.filter(el=> el.rate.length===starlength )
this.setState({listmov:fltrList2 })

}

  addFunct=()=>{
    const newmov={src:this.state.Ptimage, name:this.state.Ptname, date:this.state.Ptdate, rate:this.state.Ptrate}
    this.setState( {listmov:[...this.state.listmov, newmov]},
    )
  
  }
  putName=(e)=>{
    this.setState({
      Ptname: e.target.value
    })
  }
  putimage=(e)=>{
    this.setState({
      Ptimage: e.target.value
    })}
    putdate=(e)=>{
      this.setState({
        Ptdate: e.target.value
      })}
      putrate=(e)=>{
        this.setState({
          Ptrate: this.state.Ptrate.padEnd(e.target.value,'☆')
          
        }) }
        
closeAction=()=>{
  this.setState({display:'modal'})
}
     
  render() { 
    return ( 
      <section className="container">

      <div className="search">
        <input placeholder='  type movie name'   type='text' onChange={this.findMovie}/>
        <button  onClick={this.searchFunct}> Search</button>
        <span onClick={()=>{this.startFunct(1)}}>☆</span>
        <span onClick={()=>{this.startFunct(2)}}>☆</span>
        <span onClick={()=>{this.startFunct(3)}}>☆</span>
        <span onClick={()=>{this.startFunct(4)}}>☆</span>
        <span onClick={()=>{this.startFunct(5)}}>☆</span>

      </div>
      <Movies lstofmovies ={this.state.listmov} findName={this.state.findName}  addFunct={this.state.addFunct}/>
      
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPAUzWKoZXFD6Mb9v9pVLar5Hfn2IC__6167FN0LzHKm63p47g' onClick={this.modalFunct} />
      
      <div  className={this.state.display}>
          <div className="modal-content">
             <span className="close" onClick={this.closeAction}>&times;</span>
              <h2> ADD NEW MOVIE </h2>
            <label> Name: </label>
            <input  placeholder='Put movie name'  onChange={this.putName}  />
            <label> image: </label>
            <input  placeholder='Put movie image' onChange={this.putimage} />
            <label> Date: </label>
            <input  placeholder='Put movie date'  onChange={this.putdate}/>
            <label> Rate: </label>
            <input  placeholder='Put movie Rate'  onChange={this.putrate}/>
            <button onClick={this.addFunct} > Add </button>
          </div>
      </div>

      
    </section>
    );
  }
}

 
export default HOC( App);