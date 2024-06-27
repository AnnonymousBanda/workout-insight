const PORT = 8000
const URL = `http://127.0.0.1:${PORT}`

async function fetchData(bodyPart) {
    let response = await fetch(`${URL}/api/exercise/${bodyPart}`)
    if (response.status !== 200) alert(response.message)
    else {
        response = await response.json()
        return response
    }
}

export default fetchData
