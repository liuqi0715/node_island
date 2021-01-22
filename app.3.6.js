
const Koa = require('koa');
// import Koa from 'koa'
const Router = require('koa-router');
const requireDirective = require('require-directory')

const app = new Koa();
const router = new Router();

// const modules =  requireDirective(module,'模块下的路径');
//这里的 modules 就是所有的路由
router.get('/classic/latest/:id',(ctx,next)=>{
    console.log(ctx,'params')//路径中的参数
    console.log(ctx.request.body,'query')//通过raw传递的的参数

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


