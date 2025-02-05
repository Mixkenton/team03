import { UserForLoginInterface , UserForRegInterface } from "../../interface/login";
const apiUrl = "http://localhost:8080";

async function ListUsersToLogin(data: UserForLoginInterface) {
    console.log("Data sent to ListUsers:", data.Email);
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    let res = await fetch(
      `${apiUrl}/user/${data.Email}/${data.Password}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          return { status: true, message: res.data };
        } else {
          return { status: false, message: res.error };
        }
      });
    console.log(res);
    return res;
}

async function CreateUser(data: UserForRegInterface) {
  const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    let res = await fetch(`${apiUrl}/user`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          return { status: true, message: res.data };
        } else {
          return { status: false, message: res.error };
        }
      });
    return res;
}

async function GetGenders() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(`${apiUrl}/gender`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });

  return res;
}

async function GetPrefix() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let res = await fetch(`${apiUrl}/prefix`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });

  return res;
}

export{
    ListUsersToLogin,
    CreateUser,
    GetGenders,
    GetPrefix,
}