
export const checkValidData = (email,password) => {
    const isEmail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email)
    const isPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password)

    if(!isEmail) return "Email is not valid"
    if(!isPassword) return "Password is not valid"

    return null
}
