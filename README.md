# ngBoilerplate

This is a boilerplate for AngularJS. It was created to readily start a POC in AngularJS. If someone gets benefit from it, that would be my pleasure.

To use it, one needs to install `Ruby -> compass`

``` bash
gem install compass
```

And [Bower](https://bower.io/)

``` bash
npm install -g bower
cd <project_root>
bower install // for 'root' use the switch '--allow-root'
```

Usually I invoke `cd <project_root> && compass watch ./styles` to generate CSS files dynamically. And use a normal HTTP server spawned by:

``` bash
python -m SimpleHTTPServer // for Python 2.x

or
python -m http.server // for Python 3.x

or
static -a 0.0.0.0 -p 8081 // 'static' is a NodeJs app, can be installed by 'npm install -g node-static'
```

Licensed under [Apache License, 2.0](http://www.apache.org/licenses/LICENSE-2.0) &  [![Creative Commons Attribution 4.0 International License](https://i.creativecommons.org/l/by/4.0/88x31.png "Creative Commons Attribution 4.0 International License")](http://creativecommons.org/licenses/by/4.0/)