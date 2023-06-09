export const addToBooked = async (bookedClassInformation) => {

    const url = `${import.meta.env.VITE_API_URL}/student/booked/classess`
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: bookedClassInformation,
    })
    const data = await response.json()
    return data

}

export const isAlreadyBooked = async (email,courseId) => {

    const url = `${import.meta.env.VITE_API_URL}/student/isBooked/classess/${email}?courseId=${courseId}`
    const response = await fetch(url)
    const data = await response.json()
    return data

}