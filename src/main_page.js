import React from 'react';
import './main_page.css'
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Canvas from './sketch';

class MainPage extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {value:'1', speed:'1', active: 0, reset: 0}
    }

    activate = e => {
        this.setState({active : 1});
    }

    deactivate = e => {
        this.setState({active : 0});
    }

    changeAlg = e => {     
        switch(this.state.value) {
            case '1':   this.setState({value: '2'});  
                        document.getElementById('sortingAlg').innerHTML = "ALGORITHM : SELECTION SORT";
            break;

            case '2':   this.setState({value: '3'}); 
                        document.getElementById('sortingAlg').innerHTML = "ALGORITHM : INSERTION SORT"; 
            break;

            case '3':   this.setState({value: '4'});
                        document.getElementById('sortingAlg').innerHTML = "ALGORITHM : QUICK SORT"; 
            break;

            case '4':   this.setState({value: '1'});   
                        document.getElementById('sortingAlg').innerHTML = "ALGORITHM : BUBBLE SORT"; 
            break;

            default:    this.setState({value: '1'})
                        document.getElementById('sortingAlg').innerHTML = "ALGORITHM : BUBBLE SORT"; 
            break;
        }
    }

    changeSpeed = e => {
        switch(this.state.speed) {
            case '1':   this.setState({speed: '2'});  
                        document.getElementById('speed').innerHTML = "2x";
            break;

            case '2':   this.setState({speed: '3'}); 
                        document.getElementById('speed').innerHTML = "3x"; 
            break;

            case '3':   this.setState({speed: '4'});
                        document.getElementById('speed').innerHTML = "4x"; 
            break;

            case '4':   this.setState({speed: '1'});   
                        document.getElementById('speed').innerHTML = "1x"; 
            break;

            default:    this.setState({speed: '1'})
                        document.getElementById('speed').innerHTML = "1x"; 
            break;
        }
    }
    
    shuffle = e => {
        
        if (this.state.reset) 
            this.setState({reset: 0});
        else
            this.setState({reset: 1}); 
          
    }


    render() {    
        return (
            <Router>
                <div className = "container-1">
                    <div className = "name">
                            <a href = "/" > {this.props.name} </a>
                    </div>

                    <div className = "resume">
                            <a href = "resume"> RESUME </a>     
                    </div>

                    <div className="sort">
                            <a href = "sort"> SORT </a> 
                    </div>
                    
                    <Route path = "/" exact strict render= {
                        ()=> {
                            return (
                            <div className = "">
                            <p>
                                hey there!

                            </p>
                            </div>
                            );
                        }
                    }/>

                    <Route path = "/sort" exact strict render= {
                        ()=> {
                            return (      
                                <div className="sortPage"> 
                                                                   
                                    <div>    
                                        <Canvas value={this.state.value} speed = {
                                                        this.state.speed} active = {this.state.active} 
                                                        reset = {this.state.reset}/>
                                    </div>

                                    <div className = "button">
                                        <p className = "sortType" id = "sortingAlg">ALGORITHM : BUBBLE SORT</p>
                                        <button  type="button" onClick = {this.changeAlg}> CHANGE SORT </button>
                                        <button id = "speed" type="button" onClick = {this.changeSpeed}> 1x </button>
                                                             
                                    </div> 

                                    <div className = "button">
                                        <button type="button" onClick = {this.activate}> PLAY </button>
                                        <button type="button" onClick = {this.deactivate}> PAUSE </button>
                                        <button type="shuffle" onClick = {this.shuffle}> RESET </button>
                                    </div>    
                                </div>
                            );
                        }
                    }/>


                </div>
                

            </Router>
    
        );
    }

    
}

export default MainPage;