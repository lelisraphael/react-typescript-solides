import { User } from '../../../types'

export type Props = {
    user: User
    setSearchHistory(user: User): void
    unsetSearchHistory(user: User): void
    searchInput: string
    setSearchInput:any
    isHistoric: boolean
    focus : any
}
