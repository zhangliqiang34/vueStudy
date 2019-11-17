module.exports = {
    devServer: {
        sockHost: '192.168.1.1011:8080',
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8090',
            }
        }
    }
}