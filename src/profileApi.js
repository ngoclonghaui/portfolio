import axiosClient from './axiosClient'
const profileApi = {
  getAll: (params = null) => {
    const url = '/getallprofile'
    return axiosClient.get(url, { params })
  },
  updateProfile: (params = null) => {
    const url = '/postprofile'
    return axiosClient.post(url, params, {})
  }
}
export default profileApi
