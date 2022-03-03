import { useState, useEffect, useRef } from 'react'
import './styles.scss'
import { User } from '../types'
import Search from '../organisms/Search'
import { getData } from '../../services/userApi'
import { debounce } from '../../services/utils/debounce'

const Home = () => {

    const [userList, setUserList] = useState<User[]>([])
    const [searchInput, setSearchInput] = useState<string>("")
    const [isHistoric, setIsHistoric] = useState<boolean>(false)
    const searchInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        checkStorageItens()

        searchInputRef.current?.addEventListener('keyup',
            debounce(() => {
                getUserData(searchInputRef.current?.value)
            }, 500));

          
            searchInputRef.current?.removeEventListener('keyup',
            debounce(() => {
                getUserData(searchInputRef.current?.value)
            }, 500));
    }, [])

    const handleFilterChange = () => {
        let value: any = searchInputRef.current?.value
        setSearchInput(value)
    }

    const getUserData = async (value: string | undefined) => {
        if (!value) { setUserList([]); return }
        let result = await getData(value)
        setUserList(result)
        setIsHistoric(false)
    }

    const checkStorageItens = () => {
        let userData: any = localStorage.getItem('users');
        if (!userData) localStorage.setItem('users', JSON.stringify([]))
    }

    const setSearchHistory = (user: User): void => {
        let users: any = localStorage.getItem('users');
        users = JSON.parse(users);
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))

        setUserList([])
        setSearchInput(user.name)
    }

    const unsetSearchHistory = (user: User): void => {
        let users: any = localStorage.getItem('users');
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
                searchInputRef={searchInputRef}
                handleFilterChange={handleFilterChange}
                showHistorySearch={showHistorySearch}
                getUserData={getUserData}
                userList={userList}
                setSearchHistory={setSearchHistory}
                unsetSearchHistory={unsetSearchHistory}
                setUserList={setUserList}
                isHistoric={isHistoric}
            />
        </div>
    )
}
export default Home