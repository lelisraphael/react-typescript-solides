const getData = (value: string) => {

    return fetch(`https://gorest.co.in/public/v2/users?name=${value}`)
        .then((response) => response.json())
        .then((result) => { return result })
}

export { getData }




