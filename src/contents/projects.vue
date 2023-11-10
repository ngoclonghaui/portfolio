<template>
  <div>
    <div id="project">
      <div class="title">PROJECT</div>
      <div class="listProject">
        <div class="item" v-for="item in projects" :key="item.id">
          <img width="200px" height="200px" :src="item.anhDuAn" alt="" />
          <div class="content">
            {{ item.tenDuAn }} <br />
            Start: {{ item.ngayBatDau }} - To: {{ item.ngayKetThuc }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projectApi from '@/projectApi'
export default {
  name: 'HomeView',
  data() {
    return {
      projects: []
    }
  },
  methods: {
    async getallproject() {
      this.projects = await projectApi.getAllProject()
    }
  },
  created() {
    this.getallproject()
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
}
.listProject {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  border-bottom: var(--border);
  padding-bottom: 50px;
}
.listProject .item {
  text-align: center;
  box-shadow: var(--box-shadow);
  padding: 20px;
  border-radius: 10px;
  font-weight: bold;
  font-size: large;
}
.listProject .item img {
  width: 90%;
  border-radius: 20px;
}
.content {
  font-family: 'Poppins', sans-serif;
}
</style>
