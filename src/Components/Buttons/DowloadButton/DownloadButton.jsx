import React from 'react'

function DownloadButton() {

    function handleDownload() { 
        console.log("Download button clicked");
    }

    // Using Arrow function instead of normal function
    const viewProfile = () => { 
        console.log("View Profile button clicked");
    }

    // Check the anonymous function also.


    return (
        // onClick event handler to trigger the handleDownload function
        <div>
            <button onClick={handleDownload}>Download</button>
            <button onClick={viewProfile}>View Profile</button>
        </div>
    )
}

export default DownloadButton
