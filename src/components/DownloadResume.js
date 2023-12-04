import React from 'react';
import './DownloadResume.css';

function DownloadResumeComponent() {
    return (
        <div className="resume-download-button">
            <a href='src/resume/resume.pdf' download="Jonathan_McFee_Resume.pdf">
                <div className="resume-bubble">
                    Download My Resume
                </div>
            </a>
        </div>
    )
}

export default DownloadResumeComponent;