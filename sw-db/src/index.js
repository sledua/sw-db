const getResource = async (url) => {
    const res = await fetch(url);
    if(!res.ok){
        throw new Error(`подкинь дров ${url}`+ `но статус ${res.status}`)
    }
    const body = await res.json();
    return body;
};
getResource('https://swapi.co/api/people/1/')
.then((body) =>{
    console.log(body);
})
.catch((err) => {
    console.error('Нет коннекта подкинь дров', err);
});

