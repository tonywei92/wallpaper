'use strict';
const { promisify } = require('util');
const path = require('path');
const childProcess = require('child_process');

const execFile = promisify(childProcess.execFile);

// Binary source → https://github.com/sindresorhus/win-wallpaper
const binary = path.join(__dirname, 'winwallpaper.exe');

exports.get = async () => {
	const { stdout } = await execFile(binary, ['-g']);
	return stdout.trim();
};

exports.set = async (imagePath, options) => {
	if (typeof imagePath !== 'string') {
		throw new TypeError('Expected a string');
	}

	options = {
		scale: 'fill',
		...options
	};

	const arguments_ = [
		'-p',
		[path.resolve(imagePath)],
		'-s',
		options.scale

	]
	console.log(arguments_);
	await execFile(binary, arguments_);
};
