export default ({$axios, store}) => {

    if (process.server) {
        return
    }

    $axios.interceptors.request.use(request => {

        // Get token from store
        const {token} = store.state;

        // Update token axios header
        if (token) {
            request.headers.common['Authorization'] = `Bearer ${token}`
        }

        request.withCredentials = true;

        return request
    })

}