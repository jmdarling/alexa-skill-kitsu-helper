const env = require('../config/env')
const kitsu = require('../services/kitsu')

const howManyCompletedHandler = {
  canHandle (handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name === 'HowManyAnimeCompleted'
    )
  },
  handle (handlerInput) {
    return kitsu.getNumberOfAnimeInCategory(env.userId, 'completed') // TODO: Sort out auth.
      .then(numberCompleted => {
        const speechText = `You have completed ${numberCompleted} anime.`

        return handlerInput.responseBuilder
          .speak(speechText)
          .withSimpleCard('Completed anime', speechText)
          .withShouldEndSession(false)
          .getResponse()
      })
  }
}

module.exports = howManyCompletedHandler
