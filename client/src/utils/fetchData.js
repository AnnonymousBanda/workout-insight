const API_URL = 'http://localhost:8000'

async function fetchData(route) {
    let response = await fetch(`${API_URL}/api/${route}`)
    if (response.status !== 200) alert(response.message)
    else {
        response = await response.json()
        return response
    }
}

export default fetchData
