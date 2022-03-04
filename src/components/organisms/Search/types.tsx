import {User} from '../../../components/types'

export type Props = {
    handleFilterChange(): void;
    showHistorySearch(): void;
    getUserData(value: string): Promise<void>;
    setUserList([]): void 
    searchInputRef: any;
    searchInput: string;
    setSearchInput: any
    userList: User[];
    setSearchHistory: any;
    unsetSearchHistory: any;
    isHistoric: boolean;
}
