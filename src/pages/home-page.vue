<template>
  <div class="home-page-container">
    <!-- Hero Section -->
    <div class="home-page-hero-container">
      <div class="home-page-title-container">
        <h1 class="gradient-text">
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
    <!-- About Section -->
    <div class="home-page-section-container">
      <div class="home-page-section">
        <div class="home-page-section-title-container">
          <div class="country-list">
            <div>Denmark</div>
            <div>China</div>
            <div>Greece</div>
            <div>Italy</div>
            <div>Netherlands</div>
          </div>
        </div>
        <div class="home-page-images-container">
          <img class="home-page-image" src="https://placehold.co/400x600" alt="" />
          <img class="home-page-image" src="https://placehold.co/400x600" alt="" />
          <img class="home-page-image" src="https://placehold.co/400x600" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

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
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}

.home-page-title-container h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.home-page-description {
  font-size: 1.2rem;
  line-height: 1.5;
  color: lightgray;
}

.home-page-section-container {
  height: 100vh;
  background-color: #262626;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-page-section {
  color: white;
}

.home-page-section-title-container {
  text-align: center;
  margin-bottom: 2rem;
}

.country-list {
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-bottom: 5rem;
  font-size: 2.5em;
  letter-spacing: 1.5px;
}

.home-page-images-container {
  display: flex;
  justify-content: center;
  gap: 3rem;
}

.home-page-image {
  width: 400px;
  height: 600px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.gradient-text {
  background: linear-gradient(275deg, #0bb0bc 0%, #057e91 30%, #c01024 70%, #581521 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: bold;
  display: inline-block;
}
</style>
