import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./home.css";

const Home = () => {
  // Function to wrap each letter of the word with a span
  const wrapTextWithLetters = (text) => {
    return text.split("").map((letter, index) => (
      <span key={index} className="rubber-letter">
        {letter}
      </span>
    ));
  };

  return (
    <Box className="home-container">
      <Grid container className="content">
        <Grid item xs={12} md={6}>
          <Box className="text-content">
            <h1>{wrapTextWithLetters("Hi,")}</h1>
            <h1>
              {wrapTextWithLetters("I'm")}{" "}
              <span className="highlight">{wrapTextWithLetters("Dharun")}</span>{" "}
              <span className="highlight">{wrapTextWithLetters("Prakash")}</span>{" "}
              <span className="highlight">{wrapTextWithLetters("J A")}</span>
            </h1>
            <h1>{wrapTextWithLetters("MERN Stack Developer")}</h1>
            <h1>{wrapTextWithLetters("React | Express | MongoDB")}</h1>
            <p>
              Building Scalable Web Applications | Crafting Seamless User
              Experiences with MERN | Developing Full-Stack Solutions
            </p>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className="floating-logo">
          <div className="logo-3d">Dp</div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;