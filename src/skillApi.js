import axiosClient from './axiosClient'
const skillApi = {
  getAllSkill: (params = null) => {
    const url = '/getallskill'
    return axiosClient.get(url, { params })
  },
  updateSkill: (params = null) => {
    const url = '/postskill'
    return axiosClient.put(url, params, {})
  },
  addNewSkill: (params = null) => {
    const url = '/addnewskill'
    return axiosClient.post(url, params, {})
  },
  deleteSkill: (id = null) => {
    const url = `deleteskill/${id}`
    return axiosClient.delete(url)
  }
}
export default skillApi
