import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogDash = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setPosts(res.data.slice(0, 10)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Blog Dashboard</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogDash;
