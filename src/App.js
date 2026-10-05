import React from "react";

import Resume_Header from "./ResumeCreate/Resume_Header";
import Resume_Person_Info from "./ResumeCreate/Resume_Person_Info";
import Education from "./ResumeCreate/Education";

function App() {
    return (
        <div>
            <Resume_Header />
            <Resume_Person_Info />
            <Education />
        </div>
    );
}

export default App;