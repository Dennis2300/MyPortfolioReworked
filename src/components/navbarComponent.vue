<template>
  <div class="navbar-container">
    <!-- Toggle button with dynamic icon -->
    <button class="menu-toggle" @click="toggleMenu">{{ isMenuOpen ? '✕' : '☰ Menu' }} </button>

    <!-- Navbar shelf -->
    <nav class="navbar" :class="{ active: isMenuOpen }">
      <router-link
        v-for="link in navLinks"
        :key="link.path"
        :to="link.path"
        @click="closeMenu"
        class="nav-link"
      >
        {{ link.name }}
      </router-link>
    </nav>

    <!-- Overlay -->
    <div class="overlay" :class="{ active: isMenuOpen }" @click="closeMenu"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Reactive state
const isMenuOpen = ref(false)

// Navigation links data
const navLinks = [
  { path: '/', name: 'Home' },
  { path: '/Denmark', name: 'Denmark' },
  { path: '/Germany', name: 'Germany' },
  { path: '/Netherlands', name: 'Netherlands' },
  { path: '/Greece', name: 'Greece' },
  { path: '/China', name: 'China' },
]

// Methods
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.navbar-container {
  position: relative;
}

.menu-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1001;
  padding: 10px 15px;
  background: #2c3e50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.5em;
  transition: transform 0.2s ease;
}

.menu-toggle:hover {
  transform: scale(1.05);
}

.navbar {
  position: fixed;
  top: 0;
  right: -300px;
  width: 250px;
  height: 100vh;
  background: #34495e;
  padding: 80px 20px 20px;
  z-index: 1000;
  transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: -2px 0 15px rgba(0, 0, 0, 0.2);
}

.navbar.active {
  right: 0;
}

.nav-link {
  color: #ecf0f1;
  text-decoration: none;
  padding: 12px 15px;
  border-radius: 4px;
  transition: all 0.2s ease;
  font-size: 1.1rem;
}

.nav-link:hover {
  background-color: #2c3e50;
  transform: translateX(-5px);
}

.nav-link.router-link-exact-active {
  background-color: #3498db;
  color: white;
  font-weight: 500;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.overlay.active {
  opacity: 1;
  pointer-events: all;
}

/* Animation for menu items */
.navbar.active .nav-link {
  animation: fadeInRight 3s ease forwards;
  opacity: 0;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.navbar.active .nav-link:nth-child(1) {
  animation-delay: 0.1s;
}
.navbar.active .nav-link:nth-child(2) {
  animation-delay: 0.15s;
}
.navbar.active .nav-link:nth-child(3) {
  animation-delay: 0.2s;
}
.navbar.active .nav-link:nth-child(4) {
  animation-delay: 0.25s;
}
.navbar.active .nav-link:nth-child(5) {
  animation-delay: 0.3s;
}
.navbar.active .nav-link:nth-child(6) {
  animation-delay: 0.35s;
}
</style>
