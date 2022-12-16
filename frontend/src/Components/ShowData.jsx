import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const ShowData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/show")
      .then((res) => {
        setPosts(res.data.data);
        console.log(res.data);
      });
  }, []);

  return (
    <>
      <center>
        <div>List of People</div>
      </center>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Question</th>
            <th scope="col">City</th>
            <th scope="col">Insta i'd</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((ele, index) => {
            return ( <tr>
                <th scope="row">{ele.name}</th>
                <td>{ele.email}</td>
                <td>{ele.phone}</td>
                <td>{ele.question}</td>
                <td>{ele.city}</td>
                <td>{ele.insta}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ShowData;
