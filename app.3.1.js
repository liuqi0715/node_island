
const Koa = require('koa');
// import Koa from 'koa'
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/classic/latest',(ctx,next)=>{
    ctx.body = {key:'月亮与六便士'}
    return '123'
})

router.get('/book/latest',(ctx,next)=>{
    ctx.body = {key:'月亮与六便士',author:'毛姆','price':'202.3'}
    console.log('success');
    return '123'
})

app.use(router.routes());
app.listen(9999);


