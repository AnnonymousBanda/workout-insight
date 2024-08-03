console.log(process.env.API_URL)

const API_URL = `${process.env.API_URL||"http://localhost:8000"}/api/exercise`

async function fetchData(route) {
    let response = await fetch(`${API_URL}/${route}`)
    if (response.status !== 200) alert(response.message)
    else {
        response = await response.json()
        return response
    }
}

export default fetchData
