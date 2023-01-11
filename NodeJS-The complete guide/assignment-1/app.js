const http = require('http');

const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url==='/')
    {
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>Hello</title></head>')
        res.write('<body>')
        res.write('<p>Hello world</p>')
        res.write('<form action="/create-user" method="post"><input type="text" name="name"/><input type="submit"/></form>')
        res.write('</body>')
        res.write('<html>')
        return res.end()
    }
    if(url==='/users')
    {
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>Hello</title></head>')
        res.write('<body><ul><li>user1</li><li>user2</li><li>user3</li></ul></body>')
        res.write('<html>')
        return res.end()
    }
    if(url==='/create-user')
    {
        const body = [];
        req.on('data',e=>{
            body.push(e)
        })
        req.on('end',()=>{
            const parsed = Buffer.concat(body).toString()
            console.log(parsed.split('=')[1])
        })
        res.statusCode=302
        res.setHeader('Location','/')
        res.end()
    }
});

server.listen(3000);