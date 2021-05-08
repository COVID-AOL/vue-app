const formatFilters = (filters) => {
  if (filters === null) return ''

  let query = ''
  for (let key in filters) {
    if (filters.hasOwnProperty(key)) {
      query += '&' + key + '=' + filters[key]
    }
  }

  return query
}

module.exports = {
  formatFilters
}