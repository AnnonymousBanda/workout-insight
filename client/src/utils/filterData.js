function filterData(data, search) {
    data = data.filter((exercise) => {
        return (
            exercise.name.includes(search) ||
            exercise.target.includes(search) ||
            exercise.equipment.includes(search) ||
            exercise.bodyPart.includes(search) ||
            exercise.secondaryMuscles.some((e) => e.includes(search))
        )
    })
}

export default filterData
