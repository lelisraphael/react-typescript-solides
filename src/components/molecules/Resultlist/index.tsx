import { useState, useEffect, useRef } from 'react'
import './styles.scss'
import ResultItem from './Item'
import { User } from '../../types'
import { Props } from './types'
import useLiFocus from '../../../hooks/useLiFocus'

const ResultList = ({
    userList,
    setSearchHistory,
    unsetSearchHistory,
    setUserList,
    searchInput,
    setSearchInput,
    isHistoric
}: Props) => {

    const container = useRef<HTMLHeadingElement>(null)
    const [styleClass, setStyleClass] = useState<string>("")
    const [focus, setFocus] = useLiFocus(userList.length)

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    })

    useEffect(() => {
        checkStyleClass()
    }, [userList])

    const handleClickOutside = (event: any) => {
        if (container.current && !container.current.contains(event.target)) {
            setUserList([])
        }
    }

    const checkStyleClass = () => setStyleClass(userList?.length > 10 ? "overflow" : "overflow-hide")

    return (
        <>
            {
                userList?.length > 0 && <div className={"result-list"} ref={container}>
                    <div className={`${styleClass}`} >
                        <ul tabIndex={-1} id="list-group">
                            {
                                userList?.map((user: User, index: number) => {
                                    return (
                                        <ResultItem
                                            focus={focus === index}
                                            setSearchInput={setSearchInput}
                                            key={index}
                                            setSearchHistory={setSearchHistory}
                                            user={user}
                                            unsetSearchHistory={unsetSearchHistory}
                                            searchInput={searchInput}
                                            isHistoric={isHistoric}
                                        />
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}

export default ResultList

