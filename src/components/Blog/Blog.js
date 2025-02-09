import React from 'react';
import Post from './Post';

const Blog = ({ posts }) => {
  return (
    <div>
      <h1>My Blog</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Blog;
