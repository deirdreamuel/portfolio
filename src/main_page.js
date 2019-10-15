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
        this.setState({value : e.target.value});
    }

    changeSpeed = e => {
        this.setState({speed : e.target.value});
    }
    
    shuffle = e => {
        this.setState({reset : 1});
    }

    render() {    
        return (
            <Router>
                <div className = "container-1">
                    <div className = "NameTab">
                        <h1 className = "firstLine">   
                            <a href = "/" className ="topcenter"> {this.props.name} </a>
                            
                        </h1>
                    </div>

                    <div className = "ProjectsTab">
                        <h1 className = "firstLine">
                            <a href = "sort" className = "topright"> SORT </a> 
                        </h1>
                    </div>

                    <div className = "ResumeTab">
                        <h1 className = "firstLine">
                            <a href = "Resume" className = "topleft"> RESUME </a>
                        </h1>
                    </div>

                    <Route path = "/" exact strict render= {
                        ()=> {
                            return (<p></p>);
                        }
                    }/>

                    <Route path = "/sort" exact strict render= {
                        ()=> {
                            return (
                                <div>                                  
                                    <div>    
                                        <Canvas value={this.state.value} speed = {this.state.speed} active = {this.state.active} reset = {this.state.reset}/>
                                    </div>

                                    <div className = "drop_down">
                                        <select value = {this.state.value} onChange = {this.changeAlg}>
                                            <option value='1'>Bubble Sort</option>
                                            <option value='2'>Selection Sort</option>
                                            <option value='3'>Insertion Sort</option>
                                            <option value='4'>Quick Sort</option>
                                        </select>

                                        <select value = {this.state.speed} onChange = {this.changeSpeed}>
                                            <option value='1'>1x</option>
                                            <option value='2'>2x</option>
                                            <option value='3'>3x</option>
                                            <option value='4'>4x</option>
                                        </select>                                       
                                    </div> 

                                    <div className = "button">
                                        <button type="button" onClick = {this.activate}> PLAY </button>
                                        <button type="button" onClick = {this.deactivate}> PAUSE </button>
                                        <button type="shuffle" onClick = {this.shuffle}> SHUFFLE </button>
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