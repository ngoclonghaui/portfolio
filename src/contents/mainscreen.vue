<template>
  <div id="app">
    <header>
      <div class="logo">
        <b-avatar
          variant="info"
          src="https://placekitten.com/300/300"
        ></b-avatar>
      </div>
      <ul class="nav">
        <li>
          <a href="#" style="color: #3c3e41; text-decoration: none">Home</a>
        </li>
        <li>
          <a href="#profile" style="color: #3c3e41; text-decoration: none"
            >Profile</a
          >
        </li>
        <li>
          <a href="#education" style="color: #3c3e41; text-decoration: none"
            >Education</a
          >
        </li>
        <li>
          <a href="#skill" style="color: #3c3e41; text-decoration: none"
            >Skills</a
          >
        </li>
        <li>
          <a href="#project" style="color: #3c3e41; text-decoration: none"
            >Project</a
          >
        </li>
        <li>
          <a href="#contact" style="color: #3c3e41; text-decoration: none"
            >Contact</a
          >
        </li>
      </ul>
    </header>

    <div class="container">
      <!-- banner -->
      <div id="profile">
        <profile></profile>
      </div>
      <!-- education -->
      <div id="education">
        <education></education>
      </div>
      <!-- skill -->
      <div id="skill">
        <skill></skill>
      </div>
      <!-- project -->
      <div id="project">
        <projects></projects>
      </div>
      <!-- contact -->
      <div id="contact">
        <contact></contact>
      </div>
    </div>
  </div>
</template>

<script>
import profile from './profile.vue'
import projects from './projects.vue'
import skill from './skill.vue'
import contact from './contact.vue'
import education from './education.vue'
export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    profile,
    projects,
    skill,
    contact,
    education
  },
  methods: {}
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap');
:root {
  --border: 1px solid #dce1e4;
  --gradient: linear-gradient(-45deg, #d000f7, #24baf3);
  --box-shadow: 5px 5px 15px #c1c8d3, -5px -5px 15px #fff;
}
html {
  scroll-behavior: smooth;
  scroll-margin-bottom: 100px;
}
#app {
  background-color: rgb(246, 233, 233);
  font-family: 'Poppins', sans-serif;
}
header {
  padding: 10px;
  width: calc(100 - 20px);
  border-bottom: var(--border);
  display: grid;
  grid-template-columns: 30% 70%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #eaecee;
  z-index: 1;
}
header .logo img {
  height: 50px;
}
header ul {
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: end;
  align-items: center;
}
header ul li {
  padding: 0 30px;
}
.container {
  width: 1200px;
  max-width: 90%;
  margin: 150px auto 0;
}
</style>
