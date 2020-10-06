import React, { Component }  from 'react';
import Canvas from '../sketch';

const sortStyle={
    width:'80%',
    textAlign:'center'
};

const canvasStyle={
    top: '0px' ,
    marginLeft: '10%',
    marginRight: 'auto'    
};

const buttonStyle={
    fontSize: '3vw',
    fontWeight: 'bold',
    backgroundColor: '#FFFFFF'
}

class sort extends Component {
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

            case '4':   this.setState({value: '5'});   
                        document.getElementById('sortingAlg').innerHTML = "ALGORITHM : MERGE SORT"; 
            break;
            
            case '5':   this.setState({value: '1'});   
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
            <div className="sortPage" style={sortStyle}> 
                <div style={canvasStyle} align="center">    
                    <Canvas value={this.state.value}        speed = {this.state.speed} 
                            active = {this.state.active}    reset = {this.state.reset} />
                            
                    <p className = "sortType" id="sortingAlg" >ALGORITHM : BUBBLE SORT</p>
                    <p className = "sortType" id="sortingAlg" >COMPARISONS: {this.state.comparisons} </p>
                    <button type="button" onClick={this.activate} style={buttonStyle}>PLAY</button> &nbsp;
                    <button type="button" onClick={this.deactivate} style={buttonStyle}> PAUSE </button> &nbsp;
                    <button type="shuffle" onClick={this.shuffle} style={buttonStyle}> RESET </button> <br></br>
                    <button  type="button" onClick = {this.changeAlg} style={buttonStyle}> CHANGE SORT</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button id = "speed" type="button" onClick = {this.changeSpeed} style={buttonStyle}>  1x </button>
                    
                </div>
                <div className = "button" align="center">
                   
                    <br></br>
                    <br></br>    
                    <br></br>       
                </div>  
            </div>
        );
    }
}
 
export default sort;

