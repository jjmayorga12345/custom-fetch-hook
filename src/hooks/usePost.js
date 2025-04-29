import { useState } from "react";
import axios from "axios";

const baseURL = 'http://localhost:3000/';

const usePost = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const postData = async (data) => {
    try {
      const res = await axios.post(`${baseURL}${url}`, data);
      console.log('Posted data:', res.data);
      setResponse(res.data);
    } catch (error) {
      console.error('Error posting data:', error);
      setError(error);
    }
  };

  return { postData, response, error };
};

export default usePost;
