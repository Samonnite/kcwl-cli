#!/usr/bin/env node
const program = require('commander')
const { version } = require('../package.json');
const create = require('../lib/create')

program
    .version(version, '-v, --version') // 版本号
    .command('create <project-name>') // create为命令名称 尖括号内是参数
    .alias('i') // 别名 install / i 安装
    .description('初始化模板') // 项目描述
    //action 定义命令的回调函数
    .action(projectName => {
        create(projectName)
    })
    .parse(process.argv)
