import {CHANGE_THEME,FETCH_WEATHER_FAILURE,FETCH_WEATHER_REQUEST,FETCH_WEATHER_SUCCESS} from "./actionTypes";

export function getRandomCity() {
    return function (dispatch:any) {

        const cities = ["Tokyo", "Jakarta", "Chongqing", "Manila", "Delhi", "Seoul", "Mumbai", "Shanghai", "São Paulo", "Beijing", "New York City", "Lagos", "Mexico City", "Guangzhou", "Dhaka", "Osaka", "Cairo", "Karachi", "Moscow", "Bangkok", "Chengdu", "Los Angeles", "Kolkata", "Buenos Aires", "Istanbul", "Tehran", "London", "Shenzhen", "Tianjin", "Kinshasa", "Rio de Janeiro", "Paris", "Baoding", "Lahore", "Lima", "Bangalore", "Ho Chi Minh City", "Harbin", "Wuhan", "Shijiazhuang", "Bogotá", "Suzhou", "Linyi", "Chennai", "Nagoya", "Nanyang", "Zhengzhou", "Hyderabad", "Surabaya", "Hangzhou", "Johannesburg", "Chicago", "Qingdao", "Xi'an", "Quanzhou", "Taipei", "Dongguan", "Bandung", "Hanoi", "Shenyang", "Baghdad", "Onitsha", "Kuala Lumpur", "Ahmedabad", "Luanda", "Washington, D.C.", "Dallas", "Hong Kong", "Pune", "Nanjing", "Boston", "Santiago", "Houston", "Riyadh", "Düsseldorf", "Madrid", "Toronto", "Surat", "San Francisco","Novosibirsk"];
        const randomCity = cities[Math.floor(Math.random() * cities.length)];

        const apiKey = 'bc7ba623f7cf19185a5332182b02e3cb';
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${randomCity}&appid=${apiKey}&units=metric`;

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