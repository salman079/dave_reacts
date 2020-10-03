import React, { useEffect, useState } from "react";

export default function App() {
  const [repos, setRepos] = useState([{}]);
  useEffect(() => {
    async function getRepos() {
      const response = await fetch(
        "https://api.github.com/users/salman079/repos"
      );
      const data = await response.json();
      console.log(data);
      setRepos(data);
    }
    getRepos();
  }, []);

  return (
    <div className="App">
      <h2>Salman's Github repos</h2>
      <ol>
        {repos.map((repoObj, ind) => {
          return (
            <li key={ind}>
              {`${repoObj.name} <===>
          ${repoObj.created_at}<===> 
          ${repoObj.pushed_at}`}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
