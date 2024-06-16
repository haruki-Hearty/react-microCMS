import { createContext, useContext, useState, useEffect } from "react";
import { client } from "../lib/microcms/client";

const WorkPostsContext = createContext();

export const WorkProvider = (props) => {
  const { children } = props;
  const [works, setWorks] = useState([]);
  const latestWorks = [...works].slice(0, 3);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.get({
          endpoint: "works",
          queries: { orders: "-publishedAt" },
        });
        setWorks(response.contents);
      } catch (error) {
        console.error("Error fetching works:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <WorkPostsContext.Provider value={{ works, latestWorks }}>
      {children}
    </WorkPostsContext.Provider>
  );
};

export const useWorkPosts = () => {
  return useContext(WorkPostsContext);
};
