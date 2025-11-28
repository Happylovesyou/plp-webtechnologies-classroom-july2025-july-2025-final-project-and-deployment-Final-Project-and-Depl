import { useEffect, useState } from "react";
import API from "../services/api";

function DataFetcher() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get("/api/data");
        setMessage(response.data.message);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Message from Backend:</h2>
      <p>{message}</p>
    </div>
  );
}

export default DataFetcher;