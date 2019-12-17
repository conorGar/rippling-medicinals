const authService = {
    isAuthenticated: () => {
        const token = localStorage.getItem('token')
        if(token){
            console.log("Read token!")
        }else{
            console.log("Could Not read token")
        }
        return token ? true : false
    },
  
    signOut: () => {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
    }
  }
  
  export default authService