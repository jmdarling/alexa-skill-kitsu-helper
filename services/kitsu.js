module.exports = {
  getCurrentlyWatchingAnime,
  getNumberOfAnimeInCategory
}

const request = require('request-promise-native')

const env = require('../config/env')
const requestConfig = require('../config/request-config')

function getCurrentlyWatchingAnime (userId) {
  const url = `${env.kitsu.baseUrl}/library-entries?filter[kind]=anime&filter[status]=current&filter[user_id]=${userId}`

  return request(url, requestConfig.baseRequestOptions)
    .then(JSON.parse)
    .then(response => response.data)
    .then(libraryEntries => libraryEntries.map(libraryEntry => libraryEntry.relationships.anime.links.related))
    .then(animeLinks => Promise.all(animeLinks.map(animeLink => request(animeLink, requestConfig.baseRequestOptions))))
    .then(responses => responses.map(response => JSON.parse(response).data))
    .then(anime => anime.map(anime => anime.attributes.canonicalTitle))
}

function getNumberOfAnimeInCategory (userId, status = 'completed') {
  const url = `${env.kitsu.baseUrl}/library-entries?filter[kind]=anime&filter[user_id]=${userId}`

  return request(url, requestConfig.baseRequestOptions)
    .then(JSON.parse)
    .then(response => response.meta.statusCounts[status])
}
