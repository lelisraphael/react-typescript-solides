import './styles/index.css'
import { useState, useEffect, useRef } from 'react'
import ResultList from '../resultlist'
import { User } from '../types'
import Search from '../search'
import getData from '../../services/Users'

const Home = () => {

    const [userList, setUserList] = useState<User[]>([])
    const [searchInput, setSearchInput] = useState<string>("")

    useEffect(() => {
        window.addEventListener('keydown', (event) => {
            returnedFunction()
        });
    }, [])

    const debounce = (func: any, wait: any) => {
        let timeout: any;

        return function executedFunction(...args: any) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };

            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    const returnedFunction = debounce(function () {



    }, 500);

    const handleFilterChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()


        const { value }: { value: string } = e.currentTarget
        setSearchInput(value)

        if (!value) {
            setUserList([])
            return
        }

        fetch(`https://gorest.co.in/public/v2/users?name=${value}`)
            .then((response) => response.json())
            .then((result) => setUserList(result))

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
    }

    return (
        <div className="content">
            <Search
                searchInput={searchInput}
                handleFilterChange={handleFilterChange}
                showHistorySearch={showHistorySearch}
            />
            <div className={"search-results"}>
                <ResultList
                    userList={userList}
                    setSearchHistory={setSearchHistory}
                    unsetSearchHistory={unsetSearchHistory}
                    setUserList={setUserList}
                    searchInput={searchInput}
                />
            </div>
        </div>
    )
}
export default Home