export default ({ method = 'get', url, params }) => {
    return new Promise((rs, rj) => {
        const http = new XMLHttpRequest();
        if (method.toLowerCase() === 'get') {
            let arr = []
            for (let key in params) {
                arr.push(key + '=' + params[key])
            }
            url = url + '?' + arr.join('&')
        }
        http.open(method, url)

        http.onreadystatechange = () => {
            if (http.readyState === 4) {
                if (http.readyState === 200) {
                    const data = JSON.parse(http.responseText)
                    console.log(data)
                    rs(data)
                } else {
                    const data = JSON.parse(http.responseText)
                    console.log(data)
                    rs(data)
                    console.log("返回失败")

                }
            } else {
                console.log("返回失败")
            }
        }

        if (method.toLowerCase() === 'get') {
            http.send(null)
        } else {
            http.send(JSON.stringify(params))
        }

    })
}