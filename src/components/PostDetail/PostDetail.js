import React from 'react';
import './PostDetail.css';

const PostDetail = (props) => {
    const { title, author } = props.data;
    return (
        <div className='post-detail'>
            <h4>{title}</h4>
            <h5>{author}</h5>
            <p>Some text about the post</p>
        </div>
    );
};

export default PostDetail;