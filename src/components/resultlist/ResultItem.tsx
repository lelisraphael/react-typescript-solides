import { User } from '../types'
import HighlightText from '../../highlightText'

type Props = {
    user: User;
    setSearchHistory(user: User): void;
    unsetSearchHistory(user: User): void;
    searchInput: string
}

const ResultItem: React.FC<Props> = ({ setSearchHistory, user, unsetSearchHistory, searchInput }) => {

    return (
        <li>
            <a href="#" onClick={() => setSearchHistory(user)}>
                <HighlightText
                    content={user?.name}
                    toHighlight={searchInput}
                />
            </a>
            <a href="#" onClick={() => unsetSearchHistory(user)} style={{ float: 'right' }}>
                Remover
            </a>
        </li>
    )
}
export default ResultItem