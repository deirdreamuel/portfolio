import React from 'react';
 
import { NavLink } from 'react-router-dom';


const mainMenu= {
    marginLeft: '10%',
    fontSize: '10vw',
    fontWeight: '700',
    textAlign: 'left'
};

const subMenu= {
    top:'0px',
    marginLeft: '10%',
    marginRight: '25%',
    fontSize: '5vw',
    fontWeight: 'bold',
    textAlign: 'right'

};

const github= {
    color:'',
    fontSize:'30%',
    fontStyle:'oblique',
    fontWeight:'light',
    position:'absolute'
};

/*
const menuLine= {
    marginLeft: '10%',
    marginRight: '30%',
    fontSize: '2vw',

    fontWeight: 'bold',
    color: 'red',
    backgroundColor: 'black',
    textAlign: 'left'
};
*/

const Navigation = () => {
    return (
        <div >
            <br/><br/>
            <p style={mainMenu}>
                <NavLink to="/" >Deirdre Chong</NavLink>
                <br/>
                <a  style={github} href="https://github.com/xerzen" target='_blank' rel="noopener noreferrer"> https://github.com/xerzen</a>
            </p>
            
            <p style={subMenu}>
                ____________
                <br/> 
                <NavLink to="/sort">Sorting Visualizer</NavLink>
                <br/>
                <NavLink to="/image2ascii">img2ascii</NavLink>
                {/*<br/>
                <NavLink to="/ml">ML Research</NavLink>
                <br/>
                <NavLink to="/resume">Other Projects</NavLink>*/}
                <br/>
        

            </p>
        </div>
    );
}
 
export default Navigation;