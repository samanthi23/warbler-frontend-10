import React from "react";
import { Link } from "react-router-dom";
import MessageTimeline from "./MessageTimeline";

const Homepage = ({ currentUser }) => { // destructure currentUser from props
  if (!currentUser.isAuthenticated) { // code to run if user is not logged in
    return (
      <div className="home-hero">
        <h1>What's Happening?</h1>
        <h4>New to Warbler?</h4>
        <Link to="/signup" className="btn btn-primary">
          Sign up here
        </Link>
      </div>
    );
  }
  // if user is authenticated then run this code
  return (
    <div>
      <h1>YOU MADE IT!</h1>
    </div>
  );
};

export default Homepage;
