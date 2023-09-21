

const  getData = async () => {
    const url = "./data/orders.json"
    const options = {
        method: "GET",
    };
    return fetch(url, options).then(response => response.json())
};


export {getData};