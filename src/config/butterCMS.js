import Butter from 'buttercms';
const butter = Butter('486a6e0311a33a0d7fc9bf2c43fd3864fbd9b78a');

export function* getNews() {
  try {
    const news = yield butter.content.retrieve(['news_items'])
    return news.data.data.news_items
  } catch(error) {
    console.log(error.response)
  }
}

export function* getProducts() {
  try {
    const products = yield butter.content.retrieve(['products'])
    return products.data.data.products
  } catch(error) {
    console.log(error.response)
  }
}

export function* getPortfolio() {
  try {
    const portfolio = yield butter.content.retrieve(['companies'])
    return portfolio.data.data.companies
  } catch(error) {
    console.log(error.response)
  }
}