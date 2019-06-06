
import { restElement, exportDefaultDeclaration } from "@babel/types";

class SwapiService {
    _apiBase = 'https://swapi.co/api';
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
    if(!res.ok){
        throw new Error(`подкинь дров ${url}` `но статус ${res.status}`)
    }
    return await res.json();
    }

    getAllPeople() {
        return this.getResource(`/people/`);
        return res.resolts
    }
    getAllPerson(id) {
        return this.getResource(`/people/${id}/`);
    }
}

const swapi = new SwapiService();

swapi.getAllPeople().then(() => {

});