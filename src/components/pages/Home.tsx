import './styles/index.scss'
import { useState, useEffect, useRef } from 'react'
import ResultList from '../resultlist'
import { User } from '../types'
import Search from '../search'
import { getData } from '../../services/Users'
import { debounce} from '../../debounce'

const Home = () => {

    const [userList, setUserList] = useState<User[]>([])
    const [searchInput, setSearchInput] = useState<string>("")
    const [isHistoric, setIsHistoric] = useState<boolean>(false)

    useEffect(() => {
        const inputBounce: any = document.querySelector('input')

        inputBounce?.addEventListener('input', debounce(() => {
            getUserData(inputBounce)
            console.log("vai")
        }, 500));

    }, [])

    const getUserData = async ({ value }: any) => {

        if (!value) { setUserList([]); return }

        let result = await getData(value)
        setUserList(result)
        setIsHistoric(false)
    }



    const handleFilterChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()

        const { value }: { value: string } = e.currentTarget
        setSearchInput(value)
    }

    const setSearchHistory = (user: User): void => {
        let users: any = localStorage.getItem('users') || [];
        localStorage.setItem('users', JSON.stringify(user))
        users = JSON.parse(users);
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
        setUserList([])
        setSearchInput(user.name)
    }

    const unsetSearchHistory = (user: User): void => {
        let users: any = localStorage.getItem('users') || [];
        users = JSON.parse(users);
        let usersFiltered = users.filter((item: User) => item.id !== user.id)
        localStorage.setItem('users', JSON.stringify(usersFiltered))
        setUserList(usersFiltered)
    }

    const showHistorySearch = () => {
        let userStorage: any = localStorage.getItem('users')
        setUserList(JSON.parse(userStorage))
        setIsHistoric(true)
    }

    return (
        <div className="content">
            <Search
                searchInput={searchInput}
                handleFilterChange={handleFilterChange}
                showHistorySearch={showHistorySearch}
            />
            <ResultList
                userList={userList}
                setSearchHistory={setSearchHistory}
                unsetSearchHistory={unsetSearchHistory}
                setUserList={setUserList}
                searchInput={searchInput}
                isHistoric={isHistoric}
            />
        </div>
    )
}
export default Home