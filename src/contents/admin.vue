<template>
  <div>
    <v-card class="overflow-hidden" height="3500px" width="100%">
      <v-app-bar
        absolute
        width="100%"
        color="#6A76AB"
        style="margin-top: 0; margin-left: 0"
        dark
        prominent
        shrink-on-scroll
        src="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Admin</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-filter</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute bottom temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item @click="showFormProfile()">
              <v-list-item-title>My profile</v-list-item-title>
            </v-list-item>

            <v-list-item @click="showFormEducation()">
              <v-list-item-title>My education</v-list-item-title>
            </v-list-item>

            <v-list-item @click="showFormSkill()">
              <v-list-item-title>My skills</v-list-item-title>
            </v-list-item>

            <v-list-item @click="showFormProject()">
              <v-list-item-title>My projects</v-list-item-title>
            </v-list-item>
            <v-list-item @click="showFormContact()">
              <v-list-item-title>My contacts</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-card-text style="height: 5000px; overflow-y: auto">
        <!-- form profile -->
        <v-card style="margin: 200px 40px">
          <v-form
            v-show="showProfile"
            v-for="item in listProfile"
            :key="'pro' + item.id"
          >
            <v-row>
              <v-col>
                <label for="">Họ và tên</label>
                <v-text-field
                  v-model="name"
                  placeholder="Nhập họ tên"
                  :rules="nameRules"
                  >{{ item.name }}</v-text-field
                >
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <label for="">Giới thiệu bản thân</label>
                <v-text-field
                  v-model="gioiThieuBanThan"
                  placeholder="Giới thiệu bản thân"
                  :rules="gioiThieuRules"
                  >{{ item.gioiThieu }}</v-text-field
                >
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <label for="">Ảnh đại diện</label>
                <v-text-field
                  v-model="linkAnh"
                  placeholder="Điền link ảnh đại diện"
                  :rules="linkAnhRules"
                  >{{ item.linkAnh }}</v-text-field
                >
              </v-col>
            </v-row>
            <v-btn @click="capNhatProfile()" style="margin-bottom: 30px"
              ><v-icon>mdi-update</v-icon>Update Profile</v-btn
            >
          </v-form>
        </v-card>
        <!-- ------------------ -->
        <!-- form education -->
        <v-card v-show="showEducation">
          <v-form
            style="margin: 20px 20px"
            v-for="item in listEducation"
            :key="'edu' + item.id"
          >
            <v-row>
              <v-col>
                <label>{{ item.loaiHocVan }}</label>
                <v-text-field
                  v-model="item.tenHocVan"
                  :rules="tenHocVanRules"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
          <v-row style="margin: 25px 25px">
            <v-col class="col-lg-6">
              <v-btn @click="capNhatEdu()"
                ><v-icon>mdi-update</v-icon>Update Education</v-btn
              >
            </v-col>
            <v-col class="col-lg-6">
              <v-btn
                type="button"
                class="btn"
                data-toggle="modal"
                data-target="#myModal"
              >
                <v-icon>mdi-plus-box</v-icon>
                Add New Education
              </v-btn>

              <!-- The Modal -->
              <div class="modal" id="myModal">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                      <h4 class="modal-title">Thêm một học vấn mới</h4>
                      <button type="button" class="close" data-dismiss="modal">
                        &times;
                      </button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                      <v-row>
                        <v-col>
                          <label for="">Tên loại học vấn</label>
                          <v-text-field v-model="loaiHocVan"></v-text-field>
                        </v-col>
                        <v-col>
                          <label for="">Tên loại kỹ năng</label>
                          <v-text-field
                            v-model="tenHocVan"
                            :rules="tenHocVanRules"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-danger"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        @click="addEdu()"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>

        <!-- --------------------------- -->
        <!-- form skill -->
        <v-card v-show="showSkill">
          <v-form
            v-for="item in listSkill"
            :key="item.id"
            style="margin: 15px 15px"
          >
            <v-row>
              <v-col>
                <h2>{{ item.tenKyNang }}</h2>
                <v-text-field v-model="item.nangLuc"
                  >{{ item.nangLuc }} %</v-text-field
                >
              </v-col>
              <v-col>
                <v-btn @click="xoaKyNang(item.id)">Delete skill</v-btn>
              </v-col>
            </v-row>
          </v-form>
          <v-row v-show="showSkill">
            <v-col class="col-lg-6">
              <v-btn @click="capNhatKyNang()">Update Skill</v-btn>
            </v-col>
            <v-col class="col-lg-6">
              <v-btn
                type="button"
                class="btn"
                data-toggle="modal"
                data-target="#addSkill"
              >
                <v-icon>mdi-plus-box</v-icon>
                Add New Skill
              </v-btn>

              <!-- The Modal -->
              <div class="modal" id="addSkill">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                      <h4 class="modal-title">Thêm một kỹ năng mới</h4>
                      <button type="button" class="close" data-dismiss="modal">
                        &times;
                      </button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                      <v-row>
                        <v-col>
                          <label for="">Tên kỹ năng</label>
                          <v-text-field v-model="tenKyNangMoi"></v-text-field>
                        </v-col>
                        <v-col>
                          <label for="">Năng lực</label>
                          <v-text-field v-model="nangLucMoi"></v-text-field>
                        </v-col>
                      </v-row>
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-danger"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        @click="addSkill()"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>
        <!--Project -------------- -->
        <div v-show="showProject">
          <v-form>
            <v-row v-for="item in listProject" :key="'project' + item.id">
              <v-card style="margin-top: 20px">
                <v-row>
                  <v-col>
                    <label for="">Tên dự án</label>
                    <v-text-field v-model="item.tenDuAn"></v-text-field>
                  </v-col>
                  <v-col>
                    <label for="">Link ảnh</label>
                    <v-text-field v-model="item.anhDuAn"></v-text-field>
                  </v-col>
                  <v-col>
                    <label for="">Ảnh dự án</label>
                    <v-img
                      :src="item.anhDuAn"
                      contain
                      width="200px"
                      height="200px"
                      style="border-radius: 10px"
                    ></v-img>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <label for="">Ngày bắt đầu:</label>
                    <v-text-field
                      v-model="item.ngayBatDau"
                      :show-current="false"
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <label for="">Ngày hoàn thành:</label>
                    <v-text-field
                      v-model="item.ngayKetThuc"
                      :show-current="false"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card>
            </v-row>
          </v-form>
          <v-row style="margin-top: 20px">
            <v-col class="col-lg-6">
              <v-btn @click="capNhatDuAn()">
                <v-icon>mdi-update</v-icon>Update Projects
              </v-btn>
            </v-col>
            <v-col class="col-lg-6">
              <v-btn
                type="button"
                class="btn"
                data-toggle="modal"
                data-target="#addProject"
              >
                <v-icon>mdi-plus-box</v-icon>
                Add New Project
              </v-btn>

              <!-- The Modal -->
              <div class="modal" id="addProject">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                      <h4 class="modal-title">add new project</h4>
                      <button type="button" class="close" data-dismiss="modal">
                        &times;
                      </button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                      <v-row>
                        <v-row>
                          <label for="">Tên project mới</label>
                          <v-text-field v-model="tenDuAnNew"></v-text-field>
                        </v-row>
                        <v-row>
                          <label for="">Ngày bắt đầu</label>
                          <v-text-field v-model="ngayBatDauNew"></v-text-field>
                        </v-row>
                        <v-row>
                          <label for="">Ngày kết thúc</label>
                          <v-text-field v-model="ngayKetThucNew"></v-text-field>
                        </v-row>
                        <v-row>
                          <label for="">Link ảnh</label>
                          <v-text-field v-model="anhDuAnNew"></v-text-field>
                        </v-row>
                      </v-row>
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-danger"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        @click="addProject()"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
        <!-- form contact -->
        <v-card v-show="showContact">
          <v-form>
            <v-row v-for="contacts in listContact" :key="contacts.id">
              <v-col>
                <label for="">Id</label>
                <v-text-field v-model="contacts.id" disabled></v-text-field>
              </v-col>
              <v-col>
                <label for="">Name</label>
                <v-text-field v-model="contacts.tenLienHe"></v-text-field>
              </v-col>
              <v-col>
                <label for="">Email</label>
                <v-text-field v-model="contacts.email"></v-text-field>
              </v-col>
              <v-col>
                <label for="">Message</label>
                <v-text-field v-model="contacts.message"></v-text-field>
              </v-col>
              <v-col>
                <v-btn @click="xoaLienHe(contacts.id)">Delete contacts</v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn @click="capNhatThongTinLienHe()"> Update </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import profileApi from '@/profileApi'
import educationApi from '@/educationApi'
import skillApi from '@/skillApi'
import projectApi from '@/projectApi'
import contactApi from '@/contactApi'
export default {
  name: 'HomeView',
  data() {
    return {
      //v-show
      drawer: false,
      group: null,
      show: false,
      showProfile: false,
      showEducation: false,
      showProject: false,
      showSkill: false,
      showContact: false,
      //list item
      listProfile: [{ id: '', name: '', linkAnh: '', gioiThieu: '' }],
      listEducation: [{ id: '', loaiHocVan: '', tenHocVan: '' }],
      listSkill: [{ id: '', tenKyNang: '', nangLuc: '' }],
      listProject: [
        { id: '', tenDuAn: '', ngayBatDau: '', ngayKetThuc: '', anhDuAn: '' }
      ],
      listContact: [{ id: '', tenLienHe: '', email: '', message: '' }],
      //
      name: '',
      linkAnh: '',
      gioiThieuBanThan: '',
      //
      loaiHocVan: '',
      tenHocVan: '',
      //
      tenKyNangMoi: '',
      nangLucMoi: 0,
      tenDuAnNew: '',
      ngayBatDauNew: '',
      ngayKetThucNew: '',
      anhDuAnNew: '',
      //
      idContact: 0,
      message: '',
      email: '',
      tenLienHe: '',
      //rules
      nameRules: [
        v => !!v || 'Họ tên không được bỏ trống',
        v => v.length < 100 || 'Độ dài tên nhỏ hơn 100 ký tự'
      ],
      ngaySinhRules: [v => !!v || 'Ngày sinh không được bỏ trống'],
      gioiThieuRules: [v => !!v || 'Thông tin giới thiệu không được bỏ trống'],
      linkAnhRules: [v => !!v || 'Link ảnh không được bỏ trống'],
      tenHocVanRules: [v => !!v || 'Tên học vấn không được bỏ trống']
    }
  },
  methods: {
    //get list
    //list profile
    async getProfile() {
      this.listProfile = await profileApi.getAll()
    },
    //list education
    async getEducation() {
      this.listEducation = await educationApi.getAllEducation()
    },
    //list skill
    async getSkill() {
      this.listSkill = await skillApi.getAllSkill()
    },
    async getContact() {
      this.listContact = await contactApi.getAll()
    },
    async getProject() {
      this.listProject = await projectApi.getAllProject()
    },
    //update
    //update profile
    async capNhatProfile(
      data = {
        id: 1,
        name: this.name,
        linkAnh: this.linkAnh,
        gioiThieu: this.gioiThieuBanThan
      }
    ) {
      let newProfile = await profileApi.updateProfile(data)
      this.listProfile.fill(newProfile)
      alert('Update thành công')
    },
    //update education
    async capNhatEdu() {
      for (let i = 0; i < this.listEducation.length; i++) {
        this.listEducation[this.listEducation[i].id - 1] =
          await educationApi.updateEducation(this.listEducation[i])
      }
      alert('Update thành công')
    },
    //update skill
    async capNhatKyNang() {
      for (let i = 0; i < this.listSkill.length; i++) {
        this.listSkill[this.listSkill[i].id - 1] = await skillApi.updateSkill(
          this.listSkill[i]
        )
      }
      alert('Sửa thông tin kỹ năng thành công')
    },
    //update project
    async capNhatDuAn() {
      for (let i = 0; i < this.listProject.length; i++) {
        this.listProject[this.listProject[i].id - 1] =
          await projectApi.updateProject(this.listProject[i])
      }
      alert('cập nhật thành công')
    },
    //update contact
    async capNhatThongTinLienHe() {
      for (let i = 0; i < this.listContact.length; i++) {
        this.listContact[this.listContact[i].id - 1] =
          await contactApi.updateContact(this.listContact[i])
      }
      alert('Sửa thông tin liên hệ thành công')
    },
    //show form
    //show form profile
    showFormProfile() {
      this.showProfile = true
      this.showEducation = false
      this.showProject = false
      this.showSkill = false
      this.showContact = false

      for (let i = 0; i < this.listProfile.length; i++) {
        this.name = this.listProfile[0].name
        this.linkAnh = this.listProfile[0].linkAnh
        this.gioiThieuBanThan = this.listProfile[0].gioiThieu
      }
    },
    //show form education
    showFormEducation() {
      this.showEducation = true
      this.showProfile = false
      this.showProject = false
      this.showSkill = false
      this.showContact = false
    },
    //show form skills
    showFormSkill() {
      this.showSkill = true
      this.showProfile = false
      this.showProject = false
      this.showEducation = false
      this.showContact = false
    },
    //show form projects

    showFormProject() {
      this.showProject = true
      this.showEducation = false
      this.showProfile = false
      this.showSkill = false
      this.showContact = false
    },
    // show form contact
    showFormContact() {
      this.showContact = true
      this.showProfile = false
      this.showEducation = false
      this.showProject = false
      this.showSkill = false
    },
    //Add list item
    //add edu
    async addEdu(
      params = {
        tenHocVan: this.tenHocVan,
        loaiHocVan: this.loaiHocVan
      }
    ) {
      let newEdu = await educationApi.addNewEdu(params)
      this.listEducation.push(newEdu)
      this.tenHocVan = ''
      this.loaiHocVan = ''
      alert('Thêm education thành công')
    },
    //add skill
    async addSkill(
      params = {
        tenKyNang: this.tenKyNangMoi,
        nangLuc: this.nangLucMoi
      }
    ) {
      let newSkill = await skillApi.addNewSkill(params)
      this.listSkill.push(newSkill)
      this.tenKyNangMoi = ''
      this.nangLucMoi = ''
      alert('Thêm kỹ năng mới thành công')
    },
    //add project
    async addProject(
      params = {
        tenDuAn: this.tenDuAnNew,
        ngayBatDau: this.ngayBatDauNew,
        ngayKetThuc: this.ngayKetThucNew,
        anhDuAn: this.anhDuAnNew
      }
    ) {
      let newProject = await projectApi.addNewProject(params)
      this.listProject.push(newProject)
      alert('thêm thành công')
    },
    //delete list item
    //delete skill
    async xoaKyNang(id) {
      await skillApi.deleteSkill(id)
      alert('Xóa thành công')
      window.location.reload()
    },
    //delete contact
    async xoaLienHe(id) {
      await contactApi.deleteContact(id)
      alert('Xóa thành công')
      window.location.reload()
    }
  },
  created() {
    this.getProfile()
    this.getEducation()
    this.getSkill()
    this.getProject()
    this.getContact()
  },
  watch: {
    group() {
      this.drawer = false
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
