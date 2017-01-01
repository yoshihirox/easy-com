'use strict';

var electron = require('electron');
var app = electron.app;

app.commandLine.appendSwitch("disable-gpu")
app.commandLine.appendArgument("disable-gpu")

var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

//for router
//var express= require('express');
//var rewrite = require('express-urlrewrite');
//var webpack = require('webpack');
//var webpackDevMiddleware = require('webpack-dev-middleware')
//var WebpackConfig = require('./webpack.config')



//var app = express();

//app.use(webpackDevMiddleware(webpack(WebpackConfig),{
//publicPath: '/__build__/',
//stats:{
//colors: true
//}
//}))

var fs = require('fs')
var path = require('path')


//fs.readdirSync(__dirname).forEach(function (file) {
//if (fs.statSync(path.join(__dirname, file)).isDirectory())
//app.use(rewrite('/' + file + '/*', '/' + file + '/index.html'))
//})
//
//app.use(express.static(__dirname))

//app.listen(8080, function () {
//console.log('Server listening on http://localhost:8080, Ctrl+C to stop')

//mainWindow = new BrowserWindow({width: 800, height: 600});
//mainWindow.loadURL('file://' + __dirname + '/index.html');

//mainWindow.on('closed', function(){
//mainWindow = null; 
//});
//mainWindow.webContents.openDevTools();
//})


app.on('window-all-closed', function(){
    if(process.platform != 'darwin')
        app.quit();
});

app.on('ready', function(){
    console.log("launching windwow");
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL('file://' + __dirname + '/public/index.html');

    mainWindow.on('closed', function(){
        mainWindow = null; 
    });

//    case of the launched by .sh
        if( process.argv[2] == "dev"){
            mainWindow.webContents.openDevTools();
        }

//    case of the launched by gulp
        if( process.argv[3] == "dev"){
            mainWindow.webContents.openDevTools();
        }
});


