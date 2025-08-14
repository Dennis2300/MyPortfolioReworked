<template>
  <div class="home-page-container">
    <div class="home-page-hero-container">
      <div class="home-page-title-container">
        <h1>
          Hello! <br />
          I'm Dennis-Zixiang Zhou
        </h1>
        <p class="home-page-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quidem quibusdam?
          Qui similique, repudiandae totam, culpa numquam aut quidem ratione eveniet quaerat saepe
          enim quam asperiores consectetur! Sunt, dolorum vero.
        </p>
      </div>
    </div>
    <div class="home-page-section-container">
      <div class="home-page-section">
        <h2>About Me</h2>
        <p>
          I am a software developer with a passion for creating innovative solutions. My expertise
          includes web development, mobile applications, and cloud computing.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.home-page-container {
  min-height: 100vh;
  margin: 0%;
}

.home-page-hero-container {
  background-image: url(https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg);
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
}

.home-page-title-container {
  color: white;
  width: 50%;
  margin-left: 5%;
}

.home-page-title-container h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.home-page-description {
  font-size: 1.2rem;
  line-height: 1.5;
}
</style>
