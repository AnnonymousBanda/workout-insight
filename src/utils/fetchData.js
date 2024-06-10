const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        'x-rapidapi-host': process.env.REACT_APP_API_HOST,
    },
}

export const fetchBodyExercises = async (bodyPart) => {
    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=10&offset=0`
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}

;(async () => {
    const data = await fetchBodyExercises('back')
	console.log(data)
})()
