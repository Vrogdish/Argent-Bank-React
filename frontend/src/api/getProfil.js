// @type token : string
//  return getProfil : {body, message, status}

export const getProfil = async (token) => {

  try {
    const reponse = await fetch("http://localhost:3001/api/v1/user/profile", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
    });

    const result = await reponse.json();
    return result;

  } catch (error) {
    console.log(error);
 
  }
};
