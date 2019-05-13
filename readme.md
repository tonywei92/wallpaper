# wallpaper [![Build Status](https://travis-ci.org/sindresorhus/wallpaper.svg?branch=master)](https://travis-ci.org/sindresorhus/wallpaper) [![Build status](https://ci.appveyor.com/api/projects/status/xhwaihmhhplh5d05/branch/master?svg=true)](https://ci.appveyor.com/project/sindresorhus/wallpaper/branch/master)

> Get or set the desktop wallpaper

Works on macOS 10.12+, Linux, and ~~Windows 10+~~ Windows 7+.


## Install

```
$ npm install wallpaper
```

## Usage

```js
const wallpaper = require('wallpaper');

(async () => {
	await wallpaper.set('unicorn.jpg');

	await wallpaper.get();
	//=> '/Users/sindresorhus/unicorn.jpg'
})();
```


## API

### .get([options])

Returns a promise for the path of the current desktop wallpaper.

#### options

Type: `Object`

##### screen *(macOS only)*

Type: `string` `number`<br>
Values: `all` `main` or the index of a screen from `.screens()`<br>
Default: `main`

The screen to get the wallpaper from.

### .set(imagePath, [options])

Returns a promise.

#### imagePath

Type: `string`

The path to the image to set as the desktop wallpaper.

#### options

Type: `Object`

##### screen *(macOS only)*

Type: `string` `number`<br>
Values: `all` `main` or the index of a screen from `.screens()`
Default: `all`

The screen to set the wallpaper on.

*On Linux and Windows it's hard-coded to `main`.*

##### scale ~~macOS only~~ macOS and Windows

Type: `string`<br>
Values: `auto` `fill` `fit` `stretch` `center` `tile`<br>
Default: `fill`

Scaling method.

### .screens() *(macOS only)*

Returns a promise for the available screens.

```js
(async () => {
	await wallpaper.screens();
	//=> ['Color LCD']
})();
```


## Related

- [macos-wallpaper](https://github.com/sindresorhus/macos-wallpaper) - macOS binary used in this module
- [win-wallpaper](https://github.com/tonywei92/winwallpaper) - Windows binary used in this module


## License

MIT © [Tony Song](https://tonywei92.github.io)
