import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    // Check if the user is logged in
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login"); // Redirect to login page if not logged in
        }
    }, [navigate]);

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem("token"); // Clear token from storage
        navigate("/login"); // Redirect to login page
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Welcome to the Attendance System</h1>
            <p>You have successfully logged in!</p>
            <button
                onClick={handleLogout}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Logout
            </button>
        </div>
    );
};

export default Home;
