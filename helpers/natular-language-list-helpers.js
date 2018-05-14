module.exports = {
  buildNaturalLanguageList
}

function buildNaturalLanguageList (list) {
  if (list.length === 0) {
    return ''
  }

  if (list.length === 1) {
    return list[0]
  }

  return `${list.slice(0, list.length - 1).join(', ')} and ${list[list.length - 1]}`
}
