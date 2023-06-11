export const addToBooked = async (bookedClassInformation) => {

    const url = `${import.meta.env.VITE_API_URL}/student/booked/classess`
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'authorization': `bearer ${localStorage.getItem('access-token')}`
        },
        body: bookedClassInformation,
    })
    const data = await response.json()
    return data

}
export const removeToBooked = async (_id) => {

    const url = `${import.meta.env.VITE_API_URL}/student/booked/classess/${_id}`
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'authorization': `bearer ${localStorage.getItem('access-token')}`
        },
    })
    const data = await response.json()
    return data

}

export const isAlreadyBooked = async (email, courseId) => {

    const url = `${import.meta.env.VITE_API_URL}/student/isBooked/classess/${email}?courseId=${courseId}`
    const response = await fetch(url,{
        headers: {
            'authorization': `bearer ${localStorage.getItem('access-token')}`
        },
    })
    const data = await response.json()
    return data

}

export const isAlreadyEnrolled = async (email) => {

    const url = `${import.meta.env.VITE_API_URL}/student/clasess/alreadyEnrolled/${email}`
    const response = await fetch(url,{
        headers: {
            'authorization': `bearer ${localStorage.getItem('access-token')}`
        },
    })
    const data = await response.json()
    return data

}