<template>
  <div>
    <div class="container-fluid">
      <div class="title">CONTACT</div>
      <div class="row">
        <div class="col-lg-6">
          <img src="../assets/avatar-removebg-preview.png" alt="" />
        </div>
        <div class="col-lg-6">
          <div class="row">
            <div class="col-lg-4">
              <input
                type="text"
                placeholder="Your Name"
                v-model="tenLienHe"
                style="
                  color: white;
                  background-image: linear-gradient(45deg, red, blue);
                "
              />
            </div>
            <div class="col-lg-8">
              <input
                type="email"
                placeholder="Your email"
                v-model="email"
                style="
                  color: white;
                  background-image: linear-gradient(45deg, red, blue);
                "
              />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <textarea
                cols="30"
                rows="auto"
                placeholder="Your message"
                v-model="message"
                style="
                  color: white;
                  background-image: linear-gradient(45deg, red, blue);
                "
              ></textarea>
            </div>
            <v-btn
              @click="add()"
              width="540px"
              style="
                margin-left: 10px;
                color: white;
                background-image: linear-gradient(45deg, red, blue);
              "
              ><v-icon>mdi-email-arrow-right</v-icon>Send Message</v-btn
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contactApi from '@/contactApi'
export default {
  name: 'HomeView',
  data() {
    return {
      contacts: [],
      tenLienHe: '',
      email: '',
      message: ''
    }
  },
  methods: {
    async getContact() {
      this.contacts = await contactApi.getAll()
    },
    async addNewContact(
      params = {
        tenLienHe: this.tenLienHe,
        email: this.email,
        message: this.message
      }
    ) {
      let newContact = await contactApi.addNewContact(params)
      return newContact
    },
    add() {
      let params = [
        {
          tenLienHe: this.tenLienHe,
          email: this.email,
          message: this.message
        }
      ]
      this.addNewContact(params[0]).then(response => {
        this.contacts.push(response.data)
        this.tenLienHe = ''
        this.email = ''
        this.message = ''
        alert('Thêm thành công')
      })
    }
  },
  created() {
    this.getContact()
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap');
.title {
  text-align: center;
  font-weight: 700;
  font-size: x-large;
  font-family: 'Poppins', sans-serif;
}
input {
  border: 1px liner-gradient(-45deg, red, yellow);
  border-radius: 5px;
  width: 100%;
  font-family: 'Poppins', sans-serif;
}
textarea {
  width: 100%;
  height: 540px;
  border: 1px liner-gradient(-45deg, red, yellow);
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
}
img {
  box-shadow: 5px 5px 15px #c1c8d3, -5px -5px 15px #fff;
}
</style>
