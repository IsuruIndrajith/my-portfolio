import React from 'react'

function DownloadButton() {

    function handleDownload() { 
        console.log("Download button clicked");
    }

    // Using Arrow function instead of normal function
   const viewProfile = () => { 
    window.open("https://www.linkedin.com/in/isuru-indrajith-387ab7278", "_blank");
}

    // Check the anonymous function also.


    return (
        // onClick event handler to trigger the handleDownload function
        <div>
            {/* <button onClick={handleDownload}>Download</button> */}
            <button onClick={viewProfile}>View Profile</button>
        </div>
    )
}

export default DownloadButton
