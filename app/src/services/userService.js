const url = '/users.json';

export const getAll = () => {
    return fetch(url)
        .then(res => res.json())
        .then((users) => {
            return users;
        })
        .catch(error => {
            console.log(`Error: ${error}`);
        })
}

export const create = (userData) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userData)
    })

        .catch(error => {
            console.log(`Error: ${error}`);
        })
}

export const getOne = (userId, users) => {
    return users.filter(x => x.id === userId);
}

