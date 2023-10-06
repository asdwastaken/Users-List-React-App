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

export const getOne = (userId, users) => {
    return users.filter(x => x.id === userId);
}

