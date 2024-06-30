function camelize(str) {
    return str
        .split(' ')
        .map((a) => a.charAt(0).toUpperCase() + a.slice(1).toLowerCase())
        .join(' ')
}

export { camelize }
