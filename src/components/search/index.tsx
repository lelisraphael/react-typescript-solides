import { useEffect, useRef } from 'react'
import './styles/index.css'

type Props = {
    searchInput: string
    handleFilterChange(e: React.FormEvent<HTMLInputElement>): void
    showHistorySearch(): void
}

const Search: React.FC<Props> = ({ searchInput, handleFilterChange, showHistorySearch }) => {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])
    

    return (
        <input
            className="input"
            value={searchInput}
            onChange={handleFilterChange}
            onClick={showHistorySearch}
            ref={inputRef}
        />
    )
}
export default Search