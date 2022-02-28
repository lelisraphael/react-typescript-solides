import './styles/index.scss'
import { useState, useEffect, useRef } from 'react'
import ResultItem from './ResultItem'
import { User } from '../types'

type Props = {
    userList: User[],
    setSearchHistory(user: User): void,
    unsetSearchHistory(user: User): void
    setUserList: any
    searchInput: string
}

const ResultList = ({ userList, setSearchHistory, unsetSearchHistory, setUserList, searchInput }: Props) => {

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

    const checkStyleClass = () => userList.length > 10 && setStyleClass("overFlow")

    console.log(styleClass)

    return (
        <div className={`results ${styleClass}`} ref={container}>
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
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ResultList

