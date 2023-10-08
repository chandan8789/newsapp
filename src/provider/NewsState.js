import { useEffect, useState } from "react";
import NewsProvider from "./NewsProvider";

function NewsState({ children }) {
  const [newsapi, setNewsApi] = useState([]);
  const fetchData = async (title) => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${title}&apiKey=99d8827f02bb4a65b540b12fdadce807`);
    const resData = await res.json();
    setNewsApi(resData.articles);
  };
  useEffect(() => {
    fetchData("everything");
  }, []);
  
  return (
    <NewsProvider.Provider value={{ newsapi, fetchData }}>
      {children}
    </NewsProvider.Provider>
  );
}

export default NewsState;
