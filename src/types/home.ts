export default interface WeatherProps {
    cityTitle?: string;
    id?: number;
    weatherState: string;
    temperature: number;
    minTemp: number;
    maxTemp: number;
}