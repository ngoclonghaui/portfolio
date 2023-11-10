import axiosClient from './axiosClient'
const contactApi = {
  getAll: (params = null) => {
    const url = '/getallcontact'
    return axiosClient.get(url, { params })
  },
  deleteContact: (id = null) => {
    const url = `/deletecontact/${id}`
    return axiosClient.delete(url)
  },
  addNewContact: (params = null) => {
    const url = '/putnewcontact'
    return axiosClient.post(url, params, {})
  },
  updateContact: (params = null) => {
    const url = '/postcontact'
    return axiosClient.put(url, params, {})
  }
}
export default contactApi
