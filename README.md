# fake-ua
A Random Generator for User-Agent , Just use for Spider, Automation, Compatibility Test :tada: :tada: :clown_face:  

Github: https://github.com/zacard-orc/fake-ua  
Npm: https://www.npmjs.com/package/fake-uagt

# How to Use
```shell script
yarn add fake-uagt --save
```
```js
const { FauGen } = require('fake-uagt');
const iFau = new FauGen();

console.log(iFau.slim());
```

```text
Mozilla/5.0 (Windows NT/5.1;Win64,x64) AppleWebKit/537.12 Gecko/20101016 Chrome/62.0.2856.48 Safari/537.88
Mozilla/5.0 (Windows NT/5.0;Win64,x64) AppleWebKit/530.68 Gecko/20100813 Chrome/66.1.3306.40 Safari/525.28
Mozilla/4.0 (Windows NT/6.1;Win64,x64) AppleWebKit/537.47 Gecko/20090322 Chrome/65.1.3385.34 Safari/535.44
Mozilla/4.0 (Windows NT/6.1;Win64,x64) AppleWebKit/535.20 Gecko/20110221 Chrome/65.1.3125.45 Safari/535.66
Mozilla/4.0 (Windows NT/5.1;Win64,x64) AppleWebKit/525.20 Gecko/20100317 Chrome/51.0.2298.33 Safari/535.24
Mozilla/5.0 (Windows NT/6.0;Win64,x64) AppleWebKit/525.43 Gecko/20090811 Chrome/75.1.3080.99 Safari/537.88
Mozilla/5.0 (Windows NT/10.1;Win64,x64) AppleWebKit/537.16 Gecko/20090826 Chrome/76.1.3730.43 Safari/537.76
Mozilla/4.0 (Windows NT/6.2;Win64,x64) AppleWebKit/537.48 Gecko/20111120 Chrome/65.0.3064.83 Safari/525.54
Mozilla/4.0 (Windows NT/10.0;Win64,x64) AppleWebKit/535.67 Gecko/20100615 Chrome/68.1.3611.20 Safari/535.50
Mozilla/5.0 (Windows NT/5.1;Win64,x64) AppleWebKit/530.75 Gecko/20100621 Chrome/55.1.2645.98 Safari/537.29
```

# Feature
- :tada: a simple random fake user-agent string base on chrome
- :tada: support random weight, just like q=0.5,q=0.5,***

# Example for Others
### axios
```javascript
axios({
  method: 'post',
  url: 'http://some.domain.com/user/12345',
  headers:{
    'User-Agent':iFau.slim()
  }
})
.then(r=>{...})
.catch(e=>{...})
```

```javascript
axios.interceptors.request.use(
ffConfig=>{
 let { headers } = config;
 headers['User-Agent'] = iFau.slim();
 return ffConfig;
 ...
},
rejError=>{
 ...
})
```
### puppeter
```javascript
const page = await browser.newPage();
page.setUserAgent(iFau.slim())
```


# Useful
- :fire: React
- :fire: Vue
- :fire: NodeJs
- :fire: Electron

# MIT License

