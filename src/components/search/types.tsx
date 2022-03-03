export type Props = {
    searchInput: string
    handleFilterChange(): void
    showHistorySearch(): void
    getUserData(value: string): Promise<void>
    searchInputRef: any
    userList: any
    setSearchHistory: any
    unsetSearchHistory: any
    setUserList: any
    isHistoric: any
}