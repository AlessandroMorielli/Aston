import styles from './PostLengthFilter.module.css'

function PostLengthFilter({setLength}) {

    function handleInput(e):void {
        setLength(() => Number(e.target.value))
    }

    return (
        <input
            className={styles.filter}
            type='search'
            name='searchValue'
            placeholder='Input length'
            onChange={handleInput}
        />
    )
}

export default PostLengthFilter