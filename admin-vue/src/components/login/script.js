import axios from 'axios'

export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin () {
      axios.post('http://localhost:8888/api/private/v1/login', this.loginForm)
        .then(res => { 
          const {data, meta} = res.data
          const {msg, status} = meta
          
          if (status === 200) {
            window.alert('恭喜，登陆成功！')
            this.$router.push('/')
          } else if (status === 400) {
            window.alert(msg)
          }
        })
    }
  }
}