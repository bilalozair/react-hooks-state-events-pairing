import React, {useState} from "react";


function Vote(props) {

    const [upvoteCount, setUpvoteCount] = useState(props.upvotes);
    const [downvoteCount, setDownvoteCount] = useState(props.downvotes);


    return (
        <div>
            <button type = "button" onClick= {() => setUpvoteCount(upvoteCount+1)}>{upvoteCount} {props.upvoteEmoji}</button>
            <button type = "button" onClick= {() => setDownvoteCount(downvoteCount-1)}>{downvoteCount} {props.downvoteEmoji} </button>
            <br></br>
        </div>
    )
}




export default Vote;