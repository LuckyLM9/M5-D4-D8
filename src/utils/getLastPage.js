function getLastPage(array, itemsPerPage) {
    return Math.ceil(array.length / itemsPerPage)
}

export  default getLastPage