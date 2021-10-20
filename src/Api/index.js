import axios from "axios"

export const getBooks = () => {
  return axios.get("/books")
}

export const addToCart = (Books) => {
  axios({
    url: "/cart",
    method: "post",
    data: Books,
  }).then(function (response) {
    console.log(response)
  })
}

export const getBooksInCart = () => {
  return axios.get("/cart")
}
