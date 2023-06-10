export const addClass = async addClassInformation => {

    const url = `${import.meta.env.VITE_API_URL}/instructors/classess`
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(addClassInformation),
    })
    const data = await response.json()
    return data

}

export const approvedClass = async classId => {

    const url = `${import.meta.env.VITE_API_URL}/admin/instructors/classess/${classId}`
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({status:'approved'}),
    })
    const data = await response.json()
    return data

}

export const deniedClass = async classId => {

    const url = `${import.meta.env.VITE_API_URL}/admin/instructors/classess/${classId}`
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({status:'denied'}),
    })
    const data = await response.json()
    return data

}

export const sendFeedback = async (classId,feedback) => {

    const url = `${import.meta.env.VITE_API_URL}/admin/instructors/classess/${classId}`
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({feedback:feedback}),
    })
    const data = await response.json()
    return data

}


export const updateClass = async (classId,updateClassInformation) => {

    const url = `${import.meta.env.VITE_API_URL}/instructors/classess/${classId}`
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateClassInformation),
    })
    const data = await response.json()
    return data

}

export const countEnrolledClass = async (classId,sit_count_information) => {

    const url = `${import.meta.env.VITE_API_URL}/student/enrolled/count/${classId}`
    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(sit_count_information),
    })
    const data = await response.json()
    return data

}
export const getCountEnrolled = async (classId) => {

    const url = `${import.meta.env.VITE_API_URL}/student/enrolled/count/${classId}`
    const response = await fetch(url)
    const data = await response.json()
    return data

}

