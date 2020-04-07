export class ApiService {

    settings = {
        lang: 'ru',
        apiKey: 'bc7ba623f7cf19185a5332182b02e3cb',
        cityName: 'Novosibirsk',
        longitude: null,
        latitude: null
    };

    // url = `https://api.openweathermap.org/data/2.5/forecast?q=${}&appid=${this.settings.apiKey}&lang=${this.settings.lang}`;

    // async getWeather() {
    //     const res: any = await fetch(this.url);
    //     if (!res.ok) {
    //         throw Error(res.statusText)
    //     }
    //     return await res.json()
    // }
    async getRandomCities() {
        const lat = (Math.random()*360 - 180).toFixed(0);
        const lon = (Math.random()*360 - 180).toFixed(0);
        const url = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.settings.apiKey}`;
        const res:any = await fetch(url);
        if (!res.ok){
            throw Error(res.statustext)
        }
        return await res.json()
    }
}


