import { Props } from './types'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'
import ResultList from '../../molecules/Resultlist'

const SearchForm = ({
    handleFilterChange,
    showHistorySearch,
    handleSubmit,
    inputref,
    userList,
    setSearchHistory,
    unsetSearchHistory,
    setUserList,
    searchInput,
    isHistoric,
}: Props) => {

    return (
        <>
            <Input
                type="text"
                className="input"
                value={searchInput}
                onChange={handleFilterChange}
                onClick={showHistorySearch}
                inputref={inputref}
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
            />
        </>
    )
}
export default SearchForm