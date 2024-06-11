const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        'x-rapidapi-host': process.env.REACT_APP_API_HOST,
    },
}

export const fetchBodyExercises = async (bodyPart) => {
    const url = `https://exercisedb.p.rapidapi.com/exercises${bodyPart}?limit=10&offset=0`
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    return data
}