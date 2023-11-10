<template>
  <div class="container">
    <!-- banner -->
    <div class="banner" v-for="item in profiles" :key="item.id">
      <div class="content">
        <p>WELCOME TO MY PROFILE</p>
        <h1>
          Hi, I'm {{ item.name }} <br />
          a
          <div class="gradientText">
            <div class="job" data-job1="FrontEnd" data-job2="BackEnd"></div>
          </div>
        </h1>
        <p>{{ item.gioiThieu }}</p>
        <div class="find">
          <h3>CONTACT WITH ME</h3>
          <ul>
            <li>
              <a href="https://www.facebook.com/long.ngoc.37819959/"
                ><v-icon>mdi-facebook</v-icon></a
              >
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=d_HlPboLRL8&list=RDFM7MFYoylVs&index=13"
                ><v-icon>mdi-youtube</v-icon></a
              >
            </li>
            <li>
              <a href="https://github.com/ngoclonghaui"
                ><v-icon>mdi-github</v-icon></a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="avatar">
        <img :src="item.linkAnh" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import profileApi from '@/profileApi'
export default {
  name: 'HomeView',
  data() {
    return {
      profiles: []
    }
  },
  methods: {
    async getAllProfile() {
      this.profiles = await profileApi.getAll()
    }
  },
  created() {
    this.getAllProfile()
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap');
.container {
  width: 1200px;
  max-width: 90%;
  margin: auto 0;
  font-family: 'Poppins', sans-serif;
}
.banner {
  display: grid;
  grid-template-columns: 70% 30%;
  border-bottom: var(--border);
  padding-bottom: 50px;
  font-family: 'Poppins', sans-serif;
}
.banner .content {
  text-align: justify;
  padding-right: 50px;
}
.banner .content h1 {
  font-size: 4.5em;
  margin: 0;
}
.gradientText {
  display: inline-block;
  background-image: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.job::before {
  content: attr(data-job1);
  overflow: hidden;
  display: inline-flex;
  animation: effectText 1s linear infinite alternate,
    changeText 4s linear infinite;
}
@keyframes effectText {
  from {
    max-width: 0;
  }
  to {
    max-width: 400px;
  }
}
@keyframes changeText {
  0% {
    content: attr(data-job1);
  }
  100% {
    content: attr(data-job2);
  }
}
.find {
  margin-top: 50px;
}
.find ul {
  padding: 0;
  list-style: none;
  display: flex;
}
.find ul li {
  width: 50px;
  height: 50px;
  box-shadow: var(--box-shadow);
  margin: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}
.find ul li:hover {
  color: #fff;
  background-image: var(--gradient);
}
.banner .avatar img {
  width: 90%;
}
.banner .avatar {
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: end;
  margin-left: 100px;
  width: 100%;
}
.banner .avatar::before {
  position: absolute;
  width: 100%;
  height: 95%;
  box-shadow: var(--box-shadow);
  content: '';
  bottom: 0;
}
</style>
