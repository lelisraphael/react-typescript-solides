import { useEffect } from 'react'
import { Props } from './types'

import SearchForm from '../../molecules/SearchForm'

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
        <>

            <SearchForm
                handleFilterChange={handleFilterChange}
                showHistorySearch={showHistorySearch}
                inputref={searchInputRef}
                handleSubmit={handleSubmit}
                userList={userList}
                setSearchHistory={setSearchHistory}
                unsetSearchHistory={unsetSearchHistory}
                setUserList={setUserList}
                searchInput={searchInput}
                isHistoric={isHistoric}
            />


            {/* <Input
                type="text"
                className="input"
                value={searchInput}
                onChange={handleFilterChange}
                onClick={showHistorySearch}
                inputref={searchInputRef}
            // onKeyPress={handleSubmit}
            />
            <Button
                className="button"
                value="Pesquisar"
                onClick={handleSubmit}
            />
            <ResultList
                userList={userList}
                setSearchHistory={setSearchHistory}
                unsetSearchHistory={unsetSearchHistory}
                setUserList={setUserList}
                searchInput={searchInput}
                isHistoric={isHistoric}
            /> */}
        </>
    )
}
export default Search