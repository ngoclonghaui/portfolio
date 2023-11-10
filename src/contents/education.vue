<template>
  <div>
    
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
h2,
p {
  font-family: 'Delicious Handrawn', cursive;
}
</style>
