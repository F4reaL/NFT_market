import React from 'react'
import './Author.css'

const Author = (props) => {
    const author = props.author;
    console.log(author);

    return (
        <div className="author">
            <div className="author__avatar" ></div>
            <div className="author__infor">
                <div className="author_name">{author.authorName}</div>
                <div className="author_tagname">by @{author.authorTagName}</div>
            </div>
            <div className="liked active"></div>
        </div>
    )
}

export default Author;