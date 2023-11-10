<template>
  <div>
    <v-card class="mx-auto overflow-hidden" height="auto" width="100%">
      <v-system-bar color="deep-purple darken-3"></v-system-bar>

      <v-app-bar color="deep-purple accent-4" dark prominent shrink-on-scroll>
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
            <v-list-item>
              <v-list-item-title @click="showFormProfile()"
                >My profile</v-list-item-title
              >
            </v-list-item>

            <v-list-item>
              <v-list-item-title @click="showFormEducation()"
                >My education</v-list-item-title
              >
            </v-list-item>

            <v-list-item>
              <v-list-item-title @click="showFormSkill()"
                >My skills</v-list-item-title
              >
            </v-list-item>

            <v-list-item>
              <v-list-item-title @click="showFormProject()"
                >My projects</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="showFormContact()"
                >My contacts</v-list-item-title
              >
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-card-text style="height: auto; overflow-y: auto">
        <!-- form profile -->
        <v-form
          style="margin: 15px 15px"
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
          <v-btn @click="clickToUpdateProfile()"
            ><v-icon>mdi-update</v-icon>Update Profile</v-btn
          >
        </v-form>
        <!-- ------------------ -->
        <!-- form education -->
        <div v-show="showEducation">
          <v-form
            style="margin: 15px 15px"
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
          <v-row>
            <v-col class="col-lg-6">
              <v-btn @click="updateEdu()"
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
                        @click="clickToAddNewEducation()"
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

        <!-- --------------------------- -->
        <!-- form skill -->
        <div v-show="showSkill" style="margin: 15px 15px">
          <v-form v-for="item in listSkill" :key="item.id">
            <v-row>
              <v-col>
                <h2 v-bind="tenKyNang">{{ item.tenKyNang }}</h2>
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
                        @click="clickToAddNewSkill()"
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
        <!-- -------------- -->
        <div v-show="showProject">
          <v-form v-for="item in listProject" :key="'project' + item.id">
            <v-row>
              <v-col>
                <label for="">Tên dự án</label>
                <v-text-field v-model="item.tenDuAn"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-row>
                  <v-col class="col-lg-3">
                    <label for="">Ngày bắt đầu:</label>
                  </v-col>
                  <v-col class="col-lg-9">
                    <v-date-picker
                      v-model="item.ngayBatDau"
                      :show-current="false"
                    ></v-date-picker>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-row>
                  <v-col class="col-lg-3">
                    <label for="">Ngày hoàn thành:</label>
                  </v-col>
                  <v-col class="col-lg-9">
                    <v-date-picker
                      v-model="item.ngayKetThuc"
                      :show-current="false"
                    ></v-date-picker>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <hr />
          </v-form>
        </div>
        <div v-show="showContact">
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
        </div>
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
      drawer: false,
      group: null,
      show: false,
      showProfile: false,
      showEducation: false,
      showProject: false,
      showSkill: false,
      showContact: false,
      ////
      listProfile: [],
      listEducation: [],
      listSkill: [{ id: '', tenKyNang: '', nangLuc: '' }],
      listProject: [],
      listContact: [{ id: '', tenLienHe: '', email: '', message: '' }],
      ///
      name: '',
      linkAnh: '',
      gioiThieuBanThan: '',
      //
      loaiHocVan: '',
      tenHocVan: '',
      //
      tenKyNangMoi: '',
      nangLucMoi: 0,
      //
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      //
      tenDuAn: '',
      ngayBatDau: '',
      ngayKetThuc: '',
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
    async getProfile() {
      this.listProfile = await profileApi.getAll()
    },
    async capNhatProfile(
      data = {
        id: 1,
        name: this.name,
        linkAnh: this.linkAnh,
        gioiThieu: this.gioiThieuBanThan
      }
    ) {
      let newProfile = await profileApi.updateProfile(data)
      return newProfile
    },
    clickToUpdateProfile() {
      let data = [
        {
          id: 1,
          name: this.name,
          linkAnh: this.linkAnh,
          gioiThieu: this.gioiThieuBanThan
        }
      ]
      this.capNhatProfile(data[0]).then(response => {
        this.listProfile.fill(response.data)
      })
      alert('Sửa thành công')
    },
    showFormProfile() {
      this.showProfile = !this.showProfile
      this.showEducation =
        this.showProject =
        this.showSkill =
        this.showContact =
          false

      for (let i = 0; i < this.listProfile.length; i++) {
        this.name = this.listProfile[0].name
        this.linkAnh = this.listProfile[0].linkAnh
        this.gioiThieuBanThan = this.listProfile[0].gioiThieu
      }
    },
    // ----------------------------------
    //education
    async getEducation() {
      this.listEducation = await educationApi.getAllEducation()
    },
    async themMotEdu(
      params = {
        tenHocVan: this.tenHocVan,
        loaiHocVan: this.loaiHocVan
      }
    ) {
      let newEdu = await educationApi.addNewEdu(params)
      return newEdu
    },
    clickToAddNewEducation() {
      let params = [{ tenHocVan: this.tenHocVan, loaiHocVan: this.loaiHocVan }]
      this.themMotEdu(params[0]).then(response => {
        this.listEducation.push(response.data)
      })
      this.tenHocVan = ''
      this.loaiHocVan = ''
      alert('Thêm học vấn thành công')
    },
    showFormEducation() {
      this.showEducation = !this.showEducation
      this.showProfile =
        this.showProject =
        this.showSkill =
        this.showContact =
          false
    },
    async capNhatEdu(
      params = {
        id: 1,
        tenHocVan: this.tenHocVan,
        loaiHocVan: this.loaiHocVan
      }
    ) {
      let newEdu = await educationApi.updateEducation(params)
      return newEdu
    },
    updateEdu() {
      let params = [
        {
          id: this.id,
          tenHocVan: this.tenHocVan,
          loaiHocVan: this.loaiHocVan
        }
      ]
      this.capNhatEdu(params[0]).then(response => {
        console.log(response.data)
      })
      alert('Cập nhật thành công')
    },
    //skill
    async getSkill() {
      this.listSkill = await skillApi.getAllSkill()
    },
    async themMotKyNang(
      params = {
        tenKyNang: this.tenKyNangMoi,
        nangLuc: this.nangLucMoi
      }
    ) {
      let newSkill = await skillApi.addNewSkill(params)
      return newSkill
    },
    clickToAddNewSkill() {
      let params = [
        {
          tenKyNang: this.tenKyNangMoi,
          nangLuc: this.nangLucMoi
        }
      ]
      this.themMotKyNang(params[0]).then(response => {
        this.listSkill.push(response.data)
      })
      this.tenKyNangMoi = ''
      this.nangLucMoi = ''
      alert('Thêm kỹ năng mới thành công')
    },
    showFormSkill() {
      this.showSkill = !this.showSkill
      this.showProfile =
        this.showProject =
        this.showEducation =
        this.showContact =
          false
    },
    async capNhatKyNang() {
      // console.log(await contactApi.updateContact(params))

      for (let i = 0; i < this.listSkill.length; i++) {
        this.listSkill[this.listSkill[i].id - 1] = await skillApi.updateSkill(
          this.listSkill[i]
        )
      }
      alert('Sửa thông tin kỹ năng thành công')
    },
    async xoaKyNang(id) {
      await skillApi.deleteSkill(id)
      alert('Xóa thành công')
      window.location.reload()
    },
    //project
    async getProject() {
      this.listProject = await projectApi.getAllProject()
    },
    async themMotDuAn(
      params = {
        tenKyNang: this.tenDuAnNew,
        ngayBatDau: this.ngayBatDauNew,
        ngayKetThuc: this.ngayKetThucNew
      }
    ) {
      let newProject = await projectApi.addNewProject(params)
      return newProject
    },
    clickToAddNewProject() {
      let params = [
        {
          tenKyNang: this.tenDuAnNew,
          ngayBatDau: this.ngayBatDauNew,
          ngayKetThuc: this.ngayKetThucNew
        }
      ]
      this.themMotDuAn(params[0]).then(response => {
        this.listProject.push(response.data)
      })
    },
    async capNhatDuAn(
      params = {
        tenKyNang: this.tenDuAnUpdate,
        ngayBatDau: this.ngayBatDauUpdate,
        ngayKetThuc: this.ngayKetThucUpdate
      }
    ) {
      let updateProject = await projectApi.updateProject(params)
      return updateProject
    },
    clickToUpdateProject() {
      let params = [
        {
          id: this.idProject,
          tenKyNang: this.tenDuAnUpdate,
          ngayBatDau: this.ngayBatDauUpdate,
          ngayKetThuc: this.ngayKetThucUpdate
        }
      ]
      this.capNhatDuAn(params[0]).then(response => {
        console.log(response.data)
      })
      alert('Sửa thành công dự án')
      window.location.reload()
    },
    showFormProject() {
      this.showProject = !this.showProject
      this.showEducation =
        this.showProfile =
        this.showSkill =
        this.showContact =
          false
    },
    //contact
    async getContact() {
      this.listContact = await contactApi.getAll()
    },
    showFormContact() {
      this.showContact = !this.showContact
      this.showProfile =
        this.showEducation =
        this.showProject =
        this.showSkill =
          false
    },
    async capNhatThongTinLienHe() {
      // console.log(await contactApi.updateContact(params))

      for (let i = 0; i < this.listContact.length; i++) {
        this.listContact[this.listContact[i].id - 1] =
          await contactApi.updateContact(this.listContact[i])
      }
      alert('Sửa thông tin liên hệ thành công')
    },
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
th,
tr,
td {
  border: 1px solid black;
}
</style>
