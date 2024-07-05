module.exports = {
    publishPath: process.env.NODE_ENV === 'production'
    ? '/interval-timer/'
    : '/'
}