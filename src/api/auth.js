import axios from "axios"

// Task Two - SAVED USERS
export const saveUser = user => {
  // const currentUser = {
  //   email: user.email,
  //   name: user.displayName,
  //   role: 'student'
  // }

  axios.put(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
    email: user.email,
    name: user.displayName,
    image : user.photoURL
  })
    .then(res => console.log(res))
}

