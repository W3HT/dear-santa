// // SIGN UP
// export const createUser = (userData) => {
//     return fetch('/api/user/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData)
//     });
//   };

// // LOGIN
//   export const userLogin = (userData) => {
//     return fetch('/api/user/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     });
//   };

/* When this method is called, notice that the token is also 
provided, and then attached via headers. Headers are a secure way 
of passing tokens from client to server. */

const baseUrl = "http://localhost:3001";

export const getMe = () => {
  return fetch(`${baseUrl}/api/users/me`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const createUser = (userData) => {
  return fetch(`${baseUrl}/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch(`${baseUrl}/api/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};