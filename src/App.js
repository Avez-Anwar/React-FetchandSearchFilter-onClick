import axios from "axios";
import React, { useState } from "react";

function App() {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");

  const handleClick = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    console.log(response.data);
    setPost(response.data);
  };

  return (
    <div>
      <button onClick={handleClick}>Fetch</button>
      <input onChange={(e) => setSearch(e.target.value)} />
      {post
        .filter((val) => {
          if (search === "") {
            return val;
          } else if (val.email.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        })
        .map((posts) => {
          return <p key={posts.id}>{posts.email}</p>;
        })}
    </div>
  );
}
export default App;
