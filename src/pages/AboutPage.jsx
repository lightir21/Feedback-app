import React from "react";
import Card from "../components/shared/Card";

const About = () => {
  return (
    <Card className="about">
      <h1>About this project</h1>
      <p>this is a React app to leave feedback for a product or service</p>
      <p>Version: 1.0.0</p>
      <p>
        <a href="/">Back to home</a>
      </p>
    </Card>
  );
};

export default About;
