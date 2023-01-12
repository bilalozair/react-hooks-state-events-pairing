import React, {useState} from "react";
import Comment from "./Comment";

function CommentsList({comments}) {

    const [hideStatus, setHideStatus] = useState(false)

    function onHideBtnClick() {
        
        setHideStatus(hideStatus => !hideStatus)
       
    }
    function displayComment() {
        if (hideStatus){
            return ""
        }
        return <Comment comments = {comments}/>
    }

    return (
        <div>
            <hr></hr>
            <button type="button" onClick = {onHideBtnClick}>{hideStatus ? "Show Comments" : "Hide Comments"}</button>
            {displayComment()}
        </div>
    )
}




export default CommentsList;