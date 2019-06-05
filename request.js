const zendesk = require('./api/zendesk')

function getFromZendeskAPI(restOfURL) {
  let promise = zendesk.getFromAPI(restOfURL)
    .then(res => {
      return res
    })
    .catch((error) => {
      console.log('error from .catch in getFromZendeskAPI definition: ', error)
    })
  return promise
}

getFromZendeskAPI('tickets.json?page=2&per_page=25')
  .then(res => {
    var page1 = res.data
    console.log(page1)
  })
  .catch((error) => {
    console.log('error from .catch in getFromZendeskAPI for page1: ', error)
  })