import axios from 'axios'

const baseURL = axios.create({
    baseURL: 'https://challenge.thef2e.com/api/thef2e2019/stage6',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer c7j76s3M5TLXvy5bRjVAU3vur0l8UEv6CYSARpn7SJ3hRz1wcj4ds39XCOWD'
    },
    timeout: 60000
})

export function getAllRooms () {
    return baseURL({
        url: '/rooms',
        method: 'get'
    })
}

export function getOneRoom (id) {
    return baseURL({
        url: '/room' + id,
        method: 'get'
    })
}

export function bookingRoom (id, data) {
    return baseURL({
        url: '/room/' + id,
        method: 'post',
        data
    })
}

export function delAllBooking () {
    return baseURL({
        url: '/rooms',
        method: 'delete'
    })
}

// baseURL.interceptors.request.use(
//     function(config) {
//         if (getToken()) {
//             config.headers['Authorization'] = 'JWT ' + getToken()
//         }
//         return config
//     },
//     function(error) {
//         console.log(error)
//         return Promise.reject(error)
//     }
// )
//
// baseURL.interceptors.response.use(
//     function(response) {
//         const res = response.data
//         if (response.status === 200) {
//             if (res.code === 200) return res
//             alert(res.message)
//             return res
//         }
//         alert(response.statusText || 'Error')
//         return response
//     },
//     function(error) {
//         return Promise.reject(error)
//     }
// )
