import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div className="py-4">
      <div className="container">
        <h4>The Posts</h4>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <Card
              content={{
                imageUrl: "https://placekitten.com/g/300/150",
                title: "First post",
                published: "Published 5 Dec, 2022",
              }}
            />
          </div>
          <div className="col-md-4">
            <Card
              content={{
                imageUrl: "https://placekitten.com/g/300/150",
                title: "Second post",
                published: "Published 5 Dec, 2022",
              }}
            />
          </div>
          <div className="col-md-4">
            <Card
              content={{
                imageUrl: "https://placekitten.com/g/300/150",
                title: "Third post",
                published: "Published 5 Dec, 2022",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
