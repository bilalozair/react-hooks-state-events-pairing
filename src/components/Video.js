import React from "react";
import video from "../data/video";


function Video({title, views, dateUploaded}) {



    return (
        <div>
            <iframe
            width="919"
            height="525"
            src={video.embedUrl}
            frameBorder="0"
            allowFullScreen
            title= {video.title}
            />
            <h1 className="title">{title}</h1>
            <p className="description">{views} Views | Uploaded {dateUploaded}</p>
        </div>
    )
}




export default Video;