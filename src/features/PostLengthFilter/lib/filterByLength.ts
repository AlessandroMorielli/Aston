function filterByLength(posts, num) {
    return posts.filter((post) => post.title.length > num)
}

export default filterByLength