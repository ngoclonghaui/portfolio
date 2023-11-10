<template>
  <div>
    <div class="title">SKILL</div>
    <div class="listSkill">
      <div class="item" v-for="item in skills" :key="item.id">
        <div class="name">{{ item.tenKyNang }}</div>
        <div style="width: 500px; background-color: white; border-radius: 25px">
          <v-card
            class="evaluate"
            :width="item.nangLuc + '%'"
            style="
              background-image: linear-gradient(-45deg, #d000f7, #24baf3);
              text-align: center;
            "
            >{{ item.nangLuc }}%</v-card
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import skillApi from '@/skillApi'
export default {
  name: 'HomeView',
  data() {
    return {
      skills: []
    }
  },
  methods: {
    async getAllSkill() {
      this.skills = await skillApi.getAllSkill()
    }
  },
  created() {
    this.getAllSkill()
  }
}
</script>

<style scoped>
:root {
  --border: 1px solid #dce1e4;
  --gradient: linear-gradient(-45deg, #d000f7, #24baf3);
  --box-shadow: 5px 5px 15px #c1c8d3, -5px -5px 15px #ffffff;
}
.title {
  text-align: center;
  padding-top: 100px;
  font-weight: 700;
  font-size: x-large;
}
.listSkill {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  border-bottom: var(--border);
  padding-bottom: 50px;
  margin-top: 50px;
}
.listSkill .evaluate {
  width: 100%;
  height: 20px;
  box-shadow: var(--box-shadow);
  border-radius: 10px;
  margin-top: 20px;
  position: relative;
}
</style>
