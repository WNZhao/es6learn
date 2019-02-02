import http from 'http'

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/html;charset=UTF-8',
    })
    res.end('<h1>Hello this is my first Node.js application</<h1>')
})
server.listen(3000, '0.0.0.0')
console.log('server started at port 3000 http://127.0.0.1:3000')
