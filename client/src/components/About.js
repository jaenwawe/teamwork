import React from "react";

function About() {
    return (
        <div id="container">
            <h2>TeamWork, each one teach one strategy for Data Structures and alorithms</h2>
            <p>Add an algorithm</p>
            <p>Add a solutioon</p>
            <p>Please feel welcomed.  No one knows it all, but everyone has something to share.</p>
            <img src=" data:image/png;base64,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" alt="Tree and LinkedList" />
             
            </div>
        </div>
    );
}

export default About;
