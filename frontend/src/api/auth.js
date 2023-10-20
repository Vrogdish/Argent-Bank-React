// @type userData : {email : string , password : string}
//  return auth : {body : {token:string}, message : string, status : number}

export const auth = async (userData) => {
  try {
    const body = JSON.stringify(userData);

    const reponse = await fetch("http://localhost:3001/api/v1/user/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: body,
    });

    const result = await reponse.json();

    return result;
  } catch (error) {
    console.log(error);
    alert("server not responding")

  }
};
