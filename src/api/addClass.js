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