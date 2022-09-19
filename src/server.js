import createApp from "./app.js";

const port = process.env.PORT || 5555;

const app = createApp()

app.listen(port, function(){
    console.log(`Aplicación ejecutada en el puerto ${port}!`)
})