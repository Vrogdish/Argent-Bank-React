// @type username : {userName : string} , token : string}
//  return => {status, message, body}

export const updateProfil = async (username,token) => {
    const body = JSON.stringify(username)

    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile",{
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            method : "PUT",
            body : body
        })

        const result  = await response.json()

        return result

    } catch (error) {
        console.log(error)
        alert("server not responding")
    }
}
