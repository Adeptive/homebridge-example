##Install
```bash
git clone git://github.com/CONNCTED/homebridge-example.git
cd homebridge-example
npm install
node app.js
```

If no errors occur, register this node js application in PM2.

##Register in PM2
```bash
pm2 start app.js --name "homebridge-example"
```

##Homebridge plugins

This homebridge plugins are installed in this example project.

* [Homebridge-SoundTouch](https://github.com/CONNCTED/homebridge-soundtouch)

