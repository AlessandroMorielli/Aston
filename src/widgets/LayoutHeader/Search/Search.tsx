import { useState } from 'react'
import styles from './Search.module.css'
import {FC} from 'react'

function Search():FC {
    const [searchValue, setSearchValue] = useState('')

    function handleInput(e:React.ChangeEvent<HTMLInputElement>):void {
        setSearchValue(() => e.target.value)
    }

    return (
        <input
            type='search'
            name='searchValue'
            value={searchValue}
            placeholder='Search Anything'
            className={styles.search__input}
            onChange={handleInput}
        />
    )
}

export default Search