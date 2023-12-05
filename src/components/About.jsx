import React from "react";
import "./style.css";

function About() {
  return (
    <section class="home-page">
      <div class="card">
        <img
          src="../../../Assets/me.jpg"
          class="card-img-left"
          alt="picture of author"
        />
        <p class="about-me">
          Hello! I'm Andrew Hall, a passionate aspiring web developer with a
          hunger for learning and a drive to create engaging digital
          experiences. While my journey in the world of web development is just
          beginning, my enthusiasm and determination are boundless. One of the
          things that truly excites me about web development is the endless
          potential for innovation and problem-solving. I thrive on the
          challenge of transforming a vision into a functional, user-friendly
          website. While I may not have formal experience in the field, I am
          eager to leverage my knowledge and showcase my potential through
          hands-on projects.
        </p>
      </div>
    </section>
  );
}

export default About;
