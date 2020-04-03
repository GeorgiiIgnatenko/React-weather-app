export class ApiService {

    settings = {
        lang: 'ru',
        apiKey: 'bc7ba623f7cf19185a5332182b02e3cb',
        cityName: 'Новосибирск'
    };

    url = `https://api.openweathermap.org/data/2.5/forecast?q=${this.settings.cityName}&appid=${this.settings.apiKey}&lang=${this.settings.lang}`;

    async getWeather () {
        const res:any = await fetch(this.url);
        if (res.ok){
            return await res.json()
        }
    }
}


