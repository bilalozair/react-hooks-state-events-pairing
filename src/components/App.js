import React from "react";
import video from "../data/video.js";
import Video from "./Video.js";
import CommentsList from "./CommentsList.js";
import Vote from "./Vote.js";


function App() {
  console.log("Here's your data:", video);
  const [likeEmoji, dislikeEmoji] = ["👍", "👎"];

  return (
    <div className="App">

      <Video title = {video.title} views = {video.views} dateUploaded = {video.createdAt}/>
      <Vote 
      upvotes = {video.upvotes} 
      downvotes = {video.downvotes} 
      upvoteEmoji = {likeEmoji} 
      downvoteEmoji = {dislikeEmoji}/>

      <CommentsList comments = {video.comments}/>
    </div>
  );
}

export default App;
