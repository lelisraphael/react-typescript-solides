import { User } from '../components/types'

const GetData = (value: string) => {

    const url = 'https://gorest.co.in/public/v2/users?name='


    const users = fetch(url + value)
        .then((response) => response.json())
        .then((result) => {

            return result

        })


}

export default GetData



