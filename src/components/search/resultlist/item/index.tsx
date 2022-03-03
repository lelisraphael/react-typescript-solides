// import { User } from '../../../types'
import HighlightText from '../../../../services/utils/highlightText'
import { Props } from './types'
import { FaRegClock } from 'react-icons/fa';

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