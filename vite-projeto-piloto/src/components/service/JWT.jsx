export function parseJWT(token){
    if(!token) { return }
    const base64URL = token.split('.')[1]
    const base64 = base64URL.replace('-', '+').replace('_', '/')
    return JSON.parse(window.atob(base64))
}

export const handleLogError = (error) => {
    if(error.response){
        console.log(error.response.data)
    } else if (error.request){
        console.log(error.request)
    } else {
        console.log(error.message)
    }
}