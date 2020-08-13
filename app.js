// import Koa from 'koa';
const Koa =  require("koa");
const app = new Koa();

app.use((ctx, next) => {
    console.log(1);
    let a =  next();
    console.log(a,'a-----')
    console.log(2);
})
app.use((ctx, next) => {
    console.log(3);
    next();
    console.log(4);
    return '123'
    // return new Promise('abc')
})
//1-3-4-2
//1-3-4-'123'-2


app.listen(9898)