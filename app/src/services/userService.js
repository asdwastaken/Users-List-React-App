const url = 'users.json';

export const getAll = () => {
    return fetch(url)
        .then(res => res.json())
        .then((users) => {
            return users;
        })
        .catch(error => {
            console.log(error);
        })
}