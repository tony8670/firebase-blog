import React from 'react'

const Post = ({ tag, img, heading }) => {
    return (
        <div className={"post mx-2"}>
            <img src={img} className="post-img" alt="post" />
            <h5 className="text-purple mx-2 mt-2 pointer fw-bold">{tag}</h5>
            <h6 className="mx-2 pointer fw-bold">{heading}</h6>
        </div>
    )
}

export default Post
