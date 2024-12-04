import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const Post = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  
  const endpoint = `${baseUrl}/posts/${id}?_embed`;
  
  useEffect(() => {
    axios.get(`${endpoint}`)
    .then((res) => {
      setPost(res.data)
      setLoading(false)
    })
    .catch((err) => console.log(err))
  }, [id]);


  if (loading) {
    return <>Loading...</>
  };
  
  return (
   <div className='container'>
      <h2>Single Post:</h2>
      <div key={post.slug} className="post-container">
          <h4 className="title">{post.title.rendered}</h4>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          <div>Key: {post.slug}</div>
      </div>
    </div>
 );
};

export default Post;