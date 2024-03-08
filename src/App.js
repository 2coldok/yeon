import { Octokit } from "octokit";
import { useQuery } from "@tanstack/react-query";
import Show from "./componets/Show";
import "./App.css";

const octokit = new Octokit({
  auth: process.env.REACT_APP_CAT.replaceAll('?', ''),
});

function App() {
  const { isLoading, error, data: issues } = useQuery({
    queryKey: ["chan"],
    queryFn: async () => {
      return await octokit.request("GET /repos/{owner}/{repo}/issues", {
        owner: "2coldok",
        repo: "blog",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
    },
  });
  
  if (!isLoading) {
    console.log(issues.data[0].milestone.title);
  }
  

  return (
    <>
      {!isLoading && <Show data={issues.data} />}
    </>
  );
  
}

export default App;
