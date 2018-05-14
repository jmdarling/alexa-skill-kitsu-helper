const launchRequestHandler = {
  canHandle (handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest'
  },
  handle (handlerInput) {
    const speechText = `
      Welcome back to kitsu! You can ask me things like:
      What am I currently watching?
      How many shows have I watched?
    `

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Welcome to Kitsu!', speechText)
      .getResponse()
  }
}

module.exports = launchRequestHandler
