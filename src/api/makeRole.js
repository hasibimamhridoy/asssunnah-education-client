import axios from "axios"
import useAuth from "../hooks/useAuth"

// Task Two - makeInstructor

export const makeInstructor = async user => {

    const url = `${import.meta.env.VITE_API_URL}/users/${user?.email}`
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ role: "instructor" }),
    })
    const data = await response.json()
    return data

}
export const makeAdmin = async email => {

    const url = `${import.meta.env.VITE_API_URL}/users/${email}`
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ role: "admin" }),
    })
    const data = await response.json()
    return data

}

export const deleteUser = async _id => {

    const url = `${import.meta.env.VITE_API_URL}/users/${_id}`
    const response = await fetch(url, {
        method: 'DELETE',
        
    })
    const data = await response.json()
    return data

}
