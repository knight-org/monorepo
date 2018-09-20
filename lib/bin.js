'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _yeomanEnvironment = require('yeoman-environment');

var _yeomanEnvironment2 = _interopRequireDefault(_yeomanEnvironment);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config({ 'path': _path2.default.join(__dirname, '..', '.env') });

const env = _yeomanEnvironment2.default.createEnv().register(require.resolve('../lib/commands/create'), 'create');

_commander2.default.version(_package2.default.version, '-v, --version');

_commander2.default.command('create').option('-g, --git [git]', '从Gitlab上提取组件集创建项目').description('创建Monorepo类型项目').action(opts => {
  let { git } = opts;
  env.run(`create`, { 'fromGit': git });
});

_commander2.default.parse(process.argv);