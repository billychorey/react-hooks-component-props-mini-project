import React from 'react';
import blogData from '../data/blog';
import Article from './Article';


function ArticleList({ posts: blogDataPosts }) {
    const articles = blogDataPosts.map((post) => {
      return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />;
    });
  
    return (
      <main>
        {articles}
      </main>
    );
  }

export default ArticleList;