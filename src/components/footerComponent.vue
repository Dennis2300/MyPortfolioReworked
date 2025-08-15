<template>
  <footer>
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-socials">
          <h3>Follow me on my socials!</h3>
          <div class="social-links">
            <a href="https://github.com/yourusername" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
            <a href="https://twitter.com/yourusername" target="_blank">Twitter</a>
          </div>
        </div>
        <div class="footer-copyright">
            <p>&copy; {{ new Date().getFullYear() }} Dennis-Zixiang Zhou. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>



<style scoped>
.footer-container {
  background-color: #282c34;
  color: white;
  padding: 5px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
}

.footer-socials {
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  margin-top: 5px;
}

.footer-socials h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight:200;
  margin-bottom: 10px;
}

.footer-socials .social-links {
  display: flex;
  gap: 15px;
}
.footer-socials .social-links a {
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 2px;
  font-weight: 700;
}

.footer-socials .social-links a:hover {
  text-decoration: underline;
}

.footer-copyright {
  text-align: right;
}

.footer-copyright p {
  margin: 0;
  font-size: 1.2em;
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  letter-spacing: 1px;
}
</style>
