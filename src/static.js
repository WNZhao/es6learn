import http from 'http'
import url from 'url'
import fs from 'fs'
import path from 'path'
import MIME from './mime'

function getMime(extname) {
    const type = MIME[extname]
    if (type) {
        console.log(type)
        return type
    }
    return 'text/html;charset=utf8'
}

http.createServer((req, res) => {
    // 得到用户路径
    let { pathname } = url.parse(req.url)
    // 默认首页
    if (pathname === '/') {
        pathname = 'index.html'
    }
    // 获取扩展名
    const extName = path.extname(pathname)
    const contentType = getMime(extName)
    // 读取这个文件
    fs.readFile(`./static/${pathname}`, (err, data) => {
        if (err) {
            // throw err
            fs.readFile('./static/404.html', (er, da) => {
                if (er) { throw er }
                res.writeHead(404, { 'Content-Type': 'text/html;charset=utf8' })
                res.end(da)
            })
            // throw new Error(err.message);
            return
        }
        // Content-Type 指定资源类型 MIME
        res.writeHead(200, { 'Content-Type': `${contentType}` })
        res.end(data)
    })
}).listen(3000, '0.0.0.0')
