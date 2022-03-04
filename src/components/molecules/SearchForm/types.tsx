import { User } from '../../../components/types'

export type Props = {
    handleFilterChange(): void
    showHistorySearch(): void
    handleSubmit(): void
    setSearchHistory(): void
    unsetSearchHistory(): void
    setUserList([]): void
    inputref: any
    userList: User[]
    searchInput: string
    setSearchInput: any
    isHistoric: boolean
}


