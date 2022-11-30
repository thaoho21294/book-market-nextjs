import axios from 'axios'

const instance = axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
})

export default instance
