import axiosClient from './axiosClient'
const educationApi = {
  getAllEducation: (params = null) => {
    const url = '/getalleducation'
    return axiosClient.get(url, { params })
  },
  updateEducation: (params = null) => {
    const url = '/posteducation'
    return axiosClient.post(url, params, {})
  },
  addNewEdu: (params = null) => {
    const url = '/addneweducation'
    return axiosClient.post(url, params, {})
  }
}
export default educationApi
