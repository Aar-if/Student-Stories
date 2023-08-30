import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchToken } from "../api/Apicall";
import Loading from "../components/Loading";

const apiUrl = import.meta.env.VITE_API_URL;
const authUrl = import.meta.env.VITE_AUTH_URL;

const SplashScreen = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [credentials] = useState({
    username: "Parth",
    password: "alt1234",
  });

  useEffect(() => {
    const apiCall = async () => {
      try {
        // Replace this with your actual API endpoint and fetch logic
        const response = await fetchToken(
          authUrl,
          credentials?.username,
          credentials?.password
        ); // Example: await fetch(apiUrl, options);
        if (response?.status === 200) {
          navigate("/");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    apiCall();
  }, [navigate]); // Added navigate as a dependency to useEffect

  return (
    <div className="splash-screen">
      {loading ? (
        <div className="loading">
          <Loading />
        </div>
      ) : (
        <div className="data">
          <h1>Hi</h1>
        </div>
      )}
    </div>
  );
};

export default SplashScreen;
