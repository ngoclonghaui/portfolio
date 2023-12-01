<template>
  <v-form>
    <v-card class="container-fluid">
      <div class="title">CONTACT</div>
      <div class="row">
        <div class="col-lg-6">
          <img src="../assets/long.png" alt="" />
        </div>
        <div class="col-lg-6">
          <div class="row">
            <div class="col-lg-4">
              <input
                type="text"
                placeholder="Your Name"
                v-model="tenLienHe"
                class="input_field_1"
              />
            </div>
            <div class="col-lg-8">
              <input
                type="email"
                placeholder="Your email"
                v-model="email"
                class="input_field_1"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <textarea
                placeholder="Your message"
                v-model="message"
                class="input_field_2"
              ></textarea>
            </div>
            <v-btn
              @click="add()"
              width="630px"
              style="margin-left: 10px; color: white; background: #000"
              ><v-icon>mdi-email-arrow-right</v-icon>Send Message</v-btn
            >
          </div>
        </div>
      </div>
    </v-card>
  </v-form>
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
  border: 1px wheat;
  border-radius: 5px;
  width: 100%;
  font-family: 'Poppins', sans-serif;
}
textarea {
  width: 100%;
  height: 540px;
  border: 1px wheat;
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
}
img {
  box-shadow: 5px 5px 15px #c1c8d3, -5px -5px 15px #fff;
}
.input_field_1 {
  height: 50px;
  background: wheat;
  border: 1px solid black;
}
.input_field_2 {
  height: 350px;
  background: wheat;
  border: 1px solid black;
}
</style>
