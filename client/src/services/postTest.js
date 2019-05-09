/* eslint-disable */ 
import Api from '@/services/Api'

export default {
  postNewPost () {
    return Api().post('/posts', {
        title: 'new post title 2',
        description: 'new post description 2'
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    }
}
