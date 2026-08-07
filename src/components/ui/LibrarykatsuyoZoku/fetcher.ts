// 1.SWRを利用しない例
export default async function fetcher(url: string){
    await sleep(3000);
    // サーバーが重い想定で作ったやつ

    const res = await fetch(url);
    // fetch は指定したURLにHTTPリクエストを送る関数
    // APIからデータが来るまで待ってくれる
    if(res.ok){return await res.json();}
    // 通信が成功したらjson(jsじゃ使えない)の中身を取り出している(HTTPステータスが200～299)
    // .json()をすると変えられるらしい、意味わからん、は？
    // APIが返すものはjson
    throw new Error(res.statusText);
    // statusTexエラー文字が入ってるらしい(404みたいな)
    // 通信が失敗したらエラーが入る
}

function sleep(delay: number){
    return new Promise(resolve => setTimeout(resolve, delay));
    // setTimeout(実行したい関数, 時間)、delay秒後にresolveを実行する
    // resolve()が終わったらPromiseを返す(非同期処理の終了)
}