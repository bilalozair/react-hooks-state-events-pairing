import React from "react";


function Comment({comments}) {


    const commentsArray = comments.map((comment) => {
        
        return (
            <div key = {comment.id}>
                <h3>{comment.user}</h3>
                <p> {comment.comment}</p>
            </div>
        )

    })

    return (
        <div>
            <h2>{comments.length} Comments</h2>
                {commentsArray}
        </div>

    )
}




export default Comment;