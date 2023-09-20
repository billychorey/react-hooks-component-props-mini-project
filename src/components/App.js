import React from "react";
import Header from "./Header";
import blogData from "../data/blog";
import About from './About';
import ArticleList from './ArticleList';

function App() {
  return (
    <div className="App">
        <Header>
          <header>{blogData.name}</header>
        </Header> 
      <About>
        <aside>
          {blogData.image}
          {blogData.about}
        </aside>
      </About>
      console.log(blogData.posts );
      <ArticleList posts={blogData.posts} />
      You're on your own from here! Follow the deliverables; test things out in the browser as you write your code; and good luck!
    </div>
  );
}

export default App;