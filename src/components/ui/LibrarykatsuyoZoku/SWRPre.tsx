// 1.SWRを利用しない例
import { useEffect, useState } from "react";
import fetcher from "./fetcher";

interface WeatherData{
    latetude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_weather: {
        temperature: number;
        windspeed: number;
        winddirection: number;
        weathercode: number;
        is_day: number;
        time: string;
    };
}

const weatherCodeMap: Record<number, string> = {
    0: "快晴",
    1: "晴れ",
    2: "一部曇り",
    3: "曇り",
    45: "霧",
    48: "霧氷",
    51: "小雨(弱い霧雨)",
    53: "小雨(霧雨)",
    55: "小雨(強い霧雨)",
    61: "雨(弱い)",
    63: "雨",
    65: "雨(強い)",
    71: "雪(弱い)",
    73: "雪",
    75: "雪(強い)",
    80: "にわか雨(弱い)",
    81: "にわか雨",
    82: "にわか雨(激しい)",
    95: "雷雨",
};

export default function SWRPre(){
    const [data, setData] = useState<WeatherData | null>(null);
    const [isRefresh, setIsRefresh] = useState(true);
    // true = APIを取得できてませんよー
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    // 天気情報APIのアクセス先(東京の緯度経度。APIキー不要)
    const endpoint = 'https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true';
    // curl "https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true"
    // これを実行したあとだったらfetch関数で簡単にAPIを取得できるようになる

    useEffect(() => {
        if(!isRefresh){return;}
        // APIを取得できてる(false)なら以下の処理はしない
        setIsLoading(true);
        setError('');
        fetcher(endpoint).then(result => {
            setData(result);
            setIsRefresh(false);
        })
        .catch(error => setError(error.message))
        .finally(() => setIsLoading(false));
    }, [isRefresh]);
    // APIの取得状態が変わるたびにuseeffectを実行

    if(isLoading){ return <p>Loading...</p>}
    if(error){ return <p>Error: {error}</p>}

    const weatherCode = data?.current_weather.weathercode ?? 0;
    // ??より左にデータがなければ??より右を使う
    const description = weatherCodeMap[weatherCode] ?? "不明";
    // weatherCod = weatherCodeMapのデータ(キーである数字が入る)

    return(
        <figure>
            <p style={{fontSize: "3rem"}}>{data?.current_weather.temperature}℃</p>
            <figcaption>{description}(風速： {data?.current_weather.windspeed}m/s)</figcaption>
        </figure>
    )
}