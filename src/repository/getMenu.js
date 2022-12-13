const getMenu = () => {
  fetch('../data/menu.json', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then((response) => {
    console.log(response)
    return response.json();
  })
}

export default getMenu;