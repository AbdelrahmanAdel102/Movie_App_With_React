import axios from "axios";
import { useState, useEffect } from "react";



const useFetch = () => {
  const [data, setData] = useState({
    slug: "",
    results: [],
  });

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=0d92752441ea525aae2246c8fbf90041')
    if (data.slug !== "") {
      const timeoutId = setTimeout(() => {
        const fetch = async () => {
          try {
            const res = await got.get(`/${data.slug}`);
            setData({ ...data, results: res.data });
          } catch (err) {
            console.error(err);
          }
        };
        fetch();
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [data.slug]);

  return { data, setData };
};

export default useFetch;