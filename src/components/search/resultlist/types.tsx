import { User } from '../../types'

export type Props = {
    userList: User[]
    setSearchHistory(user: User): void
    unsetSearchHistory(user: User): void
    setUserList([]): void
    searchInput: string
    isHistoric: boolean
}