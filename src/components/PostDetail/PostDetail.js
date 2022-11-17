import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './PostDetail.css';

const PostDetail = ({id, deletePost}) => {
    const [detail, setDetail] = useState({});
    useEffect(() => {
        if (id === 0) {
            return;
        }
        axios.get(`http://localhost:8080/api/v1/posts/${id}/`)
            .then(response => {
                setDetail(response.data);
            })
            .catch(error => {
                console.log(error.message)
            });
    }, [id]);
    const editBtnHandler = (e) => {
        e.preventDefault();
        console.log('Edit clicked for id : ' + id);
    };
    const deleteBtnHandler = (e) => {
        e.preventDefault();
        deletePost(id);
    }

    if (id === 0) {
        return (
            <div className='post-detail'>
                <p>Select a post to see details</p>
            </div>
        );
    }
    return (
        <div className='post-detail'>
            <h4>{detail.title}</h4>
            <h5>{detail.author}</h5>
            <p>{detail.content}</p>
            <div className='detail-action'>
                <a href='/' onClick={editBtnHandler}>Edit</a>
                <a href='/' onClick={deleteBtnHandler}>Delete</a>
            </div>
        </div>
    );
};

export default PostDetail;