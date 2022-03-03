import './styles/index.scss'
import { useState, useEffect, useRef } from 'react'
import ResultItem from './item'
import { User } from '../../types'
import { Props } from './types'

const ResultList = ({
    userList,
    setSearchHistory,
    unsetSearchHistory,
    setUserList,
    searchInput,
    isHistoric
}: Props) => {

    const container = useRef<HTMLHeadingElement>(null)
    const [styleClass, setStyleClass] = useState<string>("")

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [])

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
                        <ul id="list-group">
                            {
                                userList?.map((user: User, index: number) => {
                                    return (
                                        <ResultItem
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

