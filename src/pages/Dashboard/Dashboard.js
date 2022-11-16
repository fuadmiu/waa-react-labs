import React, { useState } from 'react';
import PostDetail from '../../components/PostDetail/PostDetail';
import Posts from '../Posts/Posts';
import './Dashboard.css';

const Dashboard = () => {

    const [posts, setPosts] = useState([
        { id: 111, title: 'Happiness', author: 'John'},
        { id: 112, title: 'MIU', author: 'Dean'},
        { id: 113, title: 'Enjoy Life', author: 'Jasmine'},
    ]);

    const [selectedState, setSelectedState] = useState(111);

    const titleBtnHandler = () => {
        const post = posts.find(p => p.id === 111);
        post.title = document.getElementById('title').value;
        const copyPosts = [...posts];
        setPosts(copyPosts);
    };

    const setSelected = (id) => {
        setSelectedState(id);
    }

    return (
        <div className='dashboard'>
            <Posts posts={posts} setSelected={setSelected}/>

            <div className='title-change'>
                <input id='title' /> <br />
                <button id='title-btn' onClick={titleBtnHandler}>change name</button>
            </div>

            <PostDetail data={posts.find(p => p.id === selectedState)}/>
        </div>
    );
};

export default Dashboard;