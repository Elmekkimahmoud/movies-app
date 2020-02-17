import React, { Component } from 'react';
import Spinner from './spinner';

const HOC = WrappedComponent => {

   return class Hoc extends Component {
        constructor(props) {
            super(props);
            this.state = {
                time: true
            }

            setTimeout(() => {
                this.setState({time:false})
            }, 2000);
        }



        render() { 
            return this.state.time ? (<Spinner/>): (<WrappedComponent />);
        }
    }
}
 
export default HOC;