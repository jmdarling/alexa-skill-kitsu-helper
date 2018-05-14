const env = require('../config/env')
const naturalLanguageListHelpers = require('../helpers/natular-language-list-helpers')
const kitsu = require('../services/kitsu')

const currentlyWatchingAnimeHandler = {
  canHandle (handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name === 'CurrentlyWatchingAnime'
    )
  },
  handle (handlerInput) {
    return kitsu.getCurrentlyWatchingAnime(env.userId) // TODO: Sort out auth.
      .then(currentlyWatchingAnime => {
        const speechText = `
          You are currently watching: ${naturalLanguageListHelpers.buildNaturalLanguageList(currentlyWatchingAnime)}
        `

        return handlerInput.responseBuilder
          .speak(speechText)
          .withSimpleCard('Currently watching anime', speechText)
          .withShouldEndSession(false)
          .getResponse()
      })
  }
}

module.exports = currentlyWatchingAnimeHandler
