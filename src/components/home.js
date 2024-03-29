import React from 'react';
import Fade from 'react-reveal/Fade';

const homeStyle= {
    marginLeft: '10%',    
};

const companyStyle= {
    textAlign: 'left'
};

const jobStyle= {
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: '2.25vw',
    color:'red'
};

const dateStyle= {
    textAlign: 'right',
    fontSize: '2vw',
    color:'black'
};

const descriptionStyle= {
    fontFamily: 'Helvetica',
    fontSize: "2vw",
    fontWeight: "500",
    color:"black"
};



const home = () => {
    return (
        <div style= {homeStyle}>
            <br/>

            <h1><Fade left cascade> Experience </Fade></h1>

            <table width='75%'> 
                <tbody>
                <tr>
                    <td style={companyStyle}>
                        <a href="https://www.cleanwaterteam.com/" target="_blank" rel="noopener noreferrer">
                        <img src={require('./images/ccwrd.jpg')} width='100vw' alt='not found'/>
                        </a>
                    </td>

                    <td> &nbsp; </td>
                    <td style={jobStyle}>
                    
                        <Fade right cascade>
                        Software&nbsp;Engineer&nbsp;Intern
                        <span style={dateStyle}>Fall 2019 - Spring 2020</span>
                        </Fade>
                    </td> 
                </tr>
                <tr>
                    <td colSpan="10" >
                        <div style={descriptionStyle}>
                            An intern at the Clark County Water Reclamation District where I maintain our interlocal project manager used for planning engineering work. 
                            My duties include ensuring perfect accuracy in SQL queries to display financial data, project reports, project dates, etc. 
                            Additionally, tasks include projects involving automating time-consuming tasks and mining engineering data to store in the database.
                        </div>
                        <br/>
                    </td>
                </tr>
                <tr>
                <td>
                <br/>
                <br/>
                <br/>
                </td>
                </tr>
                <tr>
                    <td style={companyStyle}>
                        <a href="https://www.cleanwaterteam.com/" target="_blank" rel="noopener noreferrer">
                        <img src={require('./images/unlv.jpg')} width='100vw' alt='not found'/>
                        </a>
                    </td>
                    <td>
                    &nbsp;
                    </td>
                    <td style={jobStyle}>
                        
                        <Fade right cascade>
                        Undergraduate&nbsp;Research
                        <span style={dateStyle}>in&nbsp;Machine&nbsp;Learning <br/>Spring 2020</span>
                        </Fade>
                    </td> 
                </tr>
                <tr>
                    <td colSpan="10" style={descriptionStyle}>
                    <br/>
                        <div style={descriptionStyle}>
                            A part of UNLV and CAEO's undergraduate research experience where I learned how to implement machine learning models 
                            and gained insight into the graduate research process at UNLV.
                            The research aims to find machine learning applications in image processing. 
                            The research included Data Mining using the Google and Bing API then using machine learning models 
                            like Linear Regression, Support Vector Machine, and Generative Adversarial Networks 
                            to mimic brightness, contrast, and filter effects on images processed by ImageMagik.
                        </div>
                    <br/>
                    </td>
                </tr>
                </tbody>
            </table>
            <table width='75%'>
            

            </table>

           

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <br/>
            <br/>
            <br/>
           
        </div>
    );
}


export default home;