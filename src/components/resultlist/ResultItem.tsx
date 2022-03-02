import { User } from '../types'
import HighlightText from '../../highlightText'

import { FaRegClock, FaRegTimesCircle } from 'react-icons/fa';

type Props = {
    user: User;
    setSearchHistory(user: User): void;
    unsetSearchHistory(user: User): void;
    searchInput: string
    isHistoric: boolean
}

const ResultItem: React.FC<Props> = ({ setSearchHistory, user, unsetSearchHistory, searchInput, isHistoric }) => {
    return (
        <li>
            {isHistoric
                ?
                <>
                    <a href="#" onClick={() => setSearchHistory(user)}>
                        <span className="clock-icon">
                            <FaRegClock />
                        </span>
                        <span>
                            {user.name}
                        </span>
                    </a>
                    <a href="#" onClick={() => unsetSearchHistory(user)} style={{ float: 'right' }}>
                        <span>Remover</span>
                    </a>
                </>
                :
                <a href="#" onClick={() => setSearchHistory(user)}>

                    <HighlightText
                        content={user?.name}
                        toHighlight={searchInput}
                    />
                </a>
            }
        </li>
    )
}
export default ResultItem