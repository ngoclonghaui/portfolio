<template>
  <div id="app">
    <div class="title">Education</div>
    <div class="timeline">
      <ul>
        <li v-for="item in education" :key="item.id">
          <div class="noi_dung">
            <h3>{{ item.loaiHocVan }}</h3>
            <p>
              {{ item.tenHocVan }}
            </p>
          </div>
        </li>
        <div style="clear: both"></div>
      </ul>
    </div>
  </div>
</template>

<script>
import educationApi from '@/educationApi'
export default {
  name: 'HomeView',
  data() {
    return {
      education: []
    }
  },
  methods: {
    async getAllEducation() {
      this.education = await educationApi.getAllEducation()
    }
  },
  created() {
    this.getAllEducation()
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap');
.title {
  text-align: center;
  padding-top: 50px;
  font-weight: 700;
  font-size: x-large;
  font-family: 'Poppins', sans-serif;
}
#app {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}
h3 {
  font-family: 'Poppins', sans-serif;
}
.timeline {
  position: relative;
  margin: 50px auto;
  padding: 40px 0;
  width: 1000px;
  box-sizing: border-box;
}

.timeline ul {
  margin: 0;
  padding: 0;
}

.timeline ul li {
  line-height: normal;
  position: relative;
  width: 50%;
  padding: 20px 40px;
  box-sizing: border-box;
  list-style: none;
}
.timeline:before {
  content: '';
  position: absolute;
  left: 50%;
  width: 2px;
  height: 100%;
  background: #c5c5c5;
}

.timeline ul li:nth-child(odd) {
  float: left;
  text-align: right;
  clear: both;
}

.timeline ul li:nth-child(even) {
  float: right;
  text-align: left;
  clear: both;
}

.noi_dung {
  padding-bottom: 20px;
}

.timeline ul li:nth-child(odd):before {
  content: '';
  position: absolute;
  top: 24px;
  right: -6px;
  width: 10px;
  height: 10px;
  background: rgba(97, 123, 227, 1);
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(97, 123, 227, 0.2);
}

.timeline ul li:nth-child(even):before {
  content: '';
  position: absolute;
  top: 24px;
  left: -4px;
  width: 10px;
  height: 10px;
  background: rgba(97, 123, 227, 1);
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(97, 123, 227, 0.2);
}

.timeline ul li h3 {
  margin: 0;
  padding: 0;
  font-weight: 500;
  color: rgba(97, 123, 227, 1);
}

.timeline ul li p {
  margin: 10px 0 0;
  padding: 0;
}
.noi_dung {
  font-family: 'Poppins', sans-serif;
}
</style>
