module.exports = {
  kitsu: {
    baseUrl: process.env.KITSU_BASE_URL || 'https://kitsu.io/api/edge'
  },
  userId: process.env.USER_ID // TODO: Sort out real auth.
}
