import { useState } from 'react'
import styles from './Search.module.css'

function Search() {
    const [searchValue, setSearchValue] = useState('')

    function handleInput(e):void {
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