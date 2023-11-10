<template>
  <div id="app">
    <header>
      <div class="logo">
        <!-- <img
          src="https://th.bing.com/th/id/R.ec0606c2b986a6fe45d6871e3a534287?rik=u2f4EYq%2bhHoP7Q&riu=http%3a%2f%2fanthillonline.com%2fwp-content%2fuploads%2f2016%2f10%2fsoftware-developer.jpg&ehk=QD%2b0%2b6m7MLZuMYLaTWBWl9ijIAFu%2bPbceQby%2bygdf1g%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          style="border-radius: 50%"
        /> -->
        <b-avatar
          variant="info"
          src="https://placekitten.com/300/300"
        ></b-avatar>
      </div>
      <ul class="nav">
        <li>
          <a
            href="#"
            style="color: #3c3e41; text-decoration: none"
            data-toggle="scroll"
            >Home</a
          >
        </li>
        <li>
          <a
            href="#profile"
            style="color: #3c3e41; text-decoration: none"
            data-toggle="scroll"
            >Profile</a
          >
        </li>
        <!-- <li>
          <a
            href="#education"
            style="color: #3c3e41; text-decoration: none"
            data-toggle="scroll"
            >Education</a
          >
        </li> -->
        <li>
          <a
            href="#skill"
            style="color: #3c3e41; text-decoration: none"
            data-toggle="scroll"
            >Skills</a
          >
        </li>
        <li>
          <a
            href="#project"
            style="color: #3c3e41; text-decoration: none"
            data-toggle="scroll"
            >Project</a
          >
        </li>
        <li>
          <a
            href="#contact"
            style="color: #3c3e41; text-decoration: none"
            data-toggle="scroll"
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
export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    profile,
    projects,
    skill,
    contact
  },
  methods: {
    backTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
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
