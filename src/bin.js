
import path from 'path'
import program from 'commander'
import yeomanEnv from 'yeoman-environment'
import pckJson from '../package.json'
import dotenv from 'dotenv'

dotenv.config({ 'path': path.join(__dirname, '..', '.env') })

const env = yeomanEnv.createEnv()
  .register(require.resolve('../lib/commands/create'), 'create')

program
  .version(pckJson.version, '-v, --version')

program
  .command('create [cmd]')
  .option('-s, --source [source]', '命令执行时所构建的组件项目')
  .option('-g, --git [git]', '从Gitlab上提取组件集创建项目')
  .description('创建Monorepo类型项目')
  .action((cmd = 'project', opts) => {
    let { git, source } = opts
    env.run(`create`, { 'fromGit': git, source })
  })

program.parse(process.argv)
