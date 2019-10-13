import React from 'react';
import './main_page.css'

function MainPage(props) {
    return (
        <div class = "container-1">
            <div class = "NameTab">
                <h1 class = "firstLine">   
                    {props.name}
                </h1>
            </div>

            <div class = "ProjectsTab">
                <h1 class = "firstLine">
                    <a href = "projects" class = "topright">
                       PROJECTS
                    </a>
                </h1>
            </div>

            <div class = "ResumeTab">
                <h1 class = "firstLine">
                    <a href = "Resume" class = "topleft">
                       RESUME
                    </a>
                </h1>
            </div>

        </div>
        
    );
}

export default MainPage;