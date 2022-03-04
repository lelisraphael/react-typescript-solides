import { useRef, useState, useEffect, useCallback } from 'react';
import HighlightText from '../../../../services/utils/highlightText'
import { Props } from './types'
import { FaRegClock } from 'react-icons/fa';

const ResultItem: React.FC<Props> = ({
    setSearchHistory,
    user,
    unsetSearchHistory,
    searchInput,
    isHistoric,
    setSearchInput,
    focus
}) => {

    const ref: any = useRef()
    const handleSetInput = (e: any) => setSearchInput(e.target.outerText)

    useEffect(() => {
        if (focus) {
            ref.current.focus();
        }
    }, [focus]);

    return (
        <li tabIndex={focus ? 0 : -1} ref={ref} onFocus={handleSetInput} >
            {isHistoric
                ?
                <>
                    <a href="#" onClick={() => setSearchHistory(user)} >
                        <span className="clock-icon">
                            <FaRegClock />
                        </span>
                        <span>
                            {user.name}
                        </span>
                    </a>
                    <a href="#" onClick={() => unsetSearchHistory(user)} style={{ float: 'right' }}>
                        <span tabIndex={-1}>Remover</span>
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