import {CHANGE_THEME, FETCH_WEATHER_FAILURE, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS} from "./actionTypes";

export function getRandomCity() {
    return function (dispatch:any) {

        const cities = ["Сеул","Лондон","Токио","Пекин","Стамбул","Пекин","Шанхай","Чунцин","Берлин","Москва","Санкт-Петербург", "Новосибирск", "Воронеж", "Екатеринбург", "Омск", "Нижний Новгород", "Пермь", "Красноярск", "Челябинск", "Волгоград", "Уфа", "Ростов-на-Дону", "Самара", "Казань"];
        const randomCity = cities[Math.floor(Math.random() * cities.length)];

        const apiKey = 'bc7ba623f7cf19185a5332182b02e3cb';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${randomCity}&appid=${apiKey}&units=metric&lang=ru`;

        dispatch({
           type: FETCH_WEATHER_REQUEST
        });


        fetch(url)
            .then(res => res.json())
            .then(data => dispatch({
                type: FETCH_WEATHER_SUCCESS,
                payload: data

            }))
            .catch(error => dispatch({
                type: FETCH_WEATHER_FAILURE,
                payload: error.message
            }))
    }
}

export function changeTheme(newTheme:string) {
    return{
        type: CHANGE_THEME,
        payload: newTheme
    }
}