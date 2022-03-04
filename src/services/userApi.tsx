const getData = async (value: string) => {
    const url = "https://gorest.co.in/public/v2/users?name="

    const response = await fetch(url + value)
    const result = await response.json()
    return result
}

export { getData }




