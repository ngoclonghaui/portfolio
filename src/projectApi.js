import axiosClient from './axiosClient'
const projectApi = {
  getAllProject: (params = null) => {
    const url = '/getallproject'
    return axiosClient.get(url, { params })
  },
  updateProject: (params = null) => {
    const url = '/postproject'
    return axiosClient.post(url, params, {})
  },
  addNewProject: (params = null) => {
    const url = '/addnewproject'
    return axiosClient.post(url, { params })
  }
}
export default projectApi
