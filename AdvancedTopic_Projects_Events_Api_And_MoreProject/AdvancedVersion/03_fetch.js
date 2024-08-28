fetch('https://api.github.com/users/LalitFD')
    .then(() => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))