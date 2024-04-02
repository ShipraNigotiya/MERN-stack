'use client';
import React, { useEffect, useState } from 'react'

const Feed = () => {

    const [postList, setPostList] = useState([]);

    const fetchPostData = () => {
        fetch('http://localhost:5000/post/getall')
        .then((response) => {
            console.log(response.status);
            return response.json();
        })
        .then( (data) => {
            console.log(data);
            setPostList(data);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        fetchPostData();
    }, [])
    

  return (
    <div>
        <div className='col-md-4 mx-auto'>
            <h1>Post Feed</h1>
            <hr />

            {
                postList.map( (post) => {
                    return <div key={post._id} className='card mb-4'>
                        <div className='card-header'>
                            <h4 className='m-0'>Posted By : {post.username}</h4>
                            <p className='mt-3 mb-0'>Posted on: {new Date(post.postedOn).toLocaleDateString()}</p>
                        </div>
                        <img className='card-img-top' src={post.image} alt="" />
                    </div>
                } )
            }

        </div>
    </div>
  )
}

export default Feed;