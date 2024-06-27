const PORT = 8000
const URL = `http://127.0.0.1:${PORT}`

async function fetchData(route) {
    let response = await fetch(`${URL}/api/${route}`)
    if (response.status !== 200) alert(response.message)
    else {
        response = await response.json()
        return response
    }
}

export default fetchData
