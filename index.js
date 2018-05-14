const Alexa = require('ask-sdk')

exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    require('./request-handlers/launch-request-handler'),
    require('./request-handlers/currently-watching-handler'),
    require('./request-handlers/how-many-completed-handler')
  )
  .lambda()
