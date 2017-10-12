# BACHELOR

 An easy web app structure built with React backed by Express.

## Basic Structure

``` html
├── README.md
├── client // Front-end
│   ├── build
│   │   ├── asset-manifest.json
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   └── static
│   │       ├── css
│   │       │   ├── main.9a0fe4f1.css
│   │       │   └── main.9a0fe4f1.css.map
│   │       ├── js
│   │       │   ├── main.478fb047.js
│   │       │   └── main.478fb047.js.map
│   │       └── media
│   │           └── logo.5d5d9eef.svg
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   └── index.html
│   ├── src
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── images
│   │   │   └── logo.svg
│   │   ├── index.css
│   │   └── index.js
│   └── yarn.lock
└── server // Back end (Optional)
    ├── app.js
    ├── index.js
    ├── npm-debug.log
    ├── package.json
    └── yarn.lock
```

## Setup and Develop

``` bash
# Static nginx serving --------
# For front end development @localhost:3000: 
cd client; yarn run start

# Back end development @localhost:9000: 
node server

# Go production -------
cd client; yarn run build; cd ..; node server

# Reverse proxy nginx serving ---------
# edit nginx.conf to proxy_pass http://127.0.0.1:9000
```
