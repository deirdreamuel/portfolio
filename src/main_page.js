import React from 'react';
import './main_page.css'
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Canvas from './sketch';

function MainPage(props) {
    return (
        <Router>
            <div className = "container-1">
                <div className = "NameTab">
                    <h1 className = "firstLine">   
                        <a href = "/" className ="topcenter"> {props.name} </a>
                        
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
                                
                                <Canvas />
                                
                            </div>
                        );
                    }
                }/>


            </div>
            

        </Router>
        
    );
}

export default MainPage;