import { useEffect } from 'react'
import { Props } from './types'
import Input from '../base/input'
import ResultList from './resultlist'

const Search = ({
    searchInput,
    handleFilterChange,
    showHistorySearch,
    searchInputRef,
    getUserData,
    userList,
    setSearchHistory,
    unsetSearchHistory,
    setUserList,
    isHistoric }: Props) => {

    useEffect(() => {
        searchInputRef?.current?.focus()
    }, [searchInputRef])

    const handleSubmit = () => {
        getUserData(searchInput)
    }

    return (
        // <form className="content" onSubmit={handleSubmit}>
        <>
            <Input
                type="text"
                className="input"
                value={searchInput}
                onChange={handleFilterChange}
                onClick={showHistorySearch}
                inputRef={searchInputRef}
            />
            <Input
                type="submit"
                className="main-button"
                value="Pesquisar"
            />
            <ResultList
                userList={userList}
                setSearchHistory={setSearchHistory}
                unsetSearchHistory={unsetSearchHistory}
                setUserList={setUserList}
                searchInput={searchInput}
                isHistoric={isHistoric}
            />
        </>
        // </form>
    )
}
export default Search