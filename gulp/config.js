/**
 * Created by liusheng on 15-7-2.
 */
const tmp = '.tmp';
const app = 'app';
const dist = 'dist';
const test = 'test';

module.exports = {
	styles: {
		lessSrc: app + '/styles/**/*.less',
		lessDest: tmp + '/styles',
		minifySrc: tmp + '/styles/**/*.css',
		minifyDest: dist + '/styles'
	},
	images: {
		imagesSrc: app + '/images/**/*',
		imagesDest: tmp + '/images',
		minifySrc: tmp + '/images/**/*',
		minifyDest: dist + '/images'
	},
	fonts: {
		fontSrc: app + '/font/**/*',
		fontTmpDest: tmp + '/font',
		fontDistDest: dist + '/font',
		fontChange: tmp + '/fonts/**/*'
	},
	htmls: {
		htmlsSrc: app + '/htmls/**/*.hbs',
		htmlsTmpDest: tmp + '/htmls',
		htmlsDistDest: dist + '/htmls',
		sharedSrc: app + '/htmls/shared'
	},
	scripts: {
		scriptsSrc: app + '/scripts/**.js',
		scriptsBrowsDest: tmp + '/scripts',
		scriptsDistSrc: tmp + '/scripts/**.js',
		scriptsDistDest: dist + '/scripts',
		baseDir: app + '/scripts/',
		extensions: ['.hbs', '.jsx']
	},
		bower: 'bower.json'
}