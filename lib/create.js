const chalk = require('chalk')
const fs = require('fs')
const inquirer = require('inquirer')
const { exec } = require('child_process')
const path = require('path')
const checkDire = require('../utils/checkDire')
const { promptTypeList } = require('./config')

module.exports = async function (name) {
    // checkDire 检查创建的项目名是否已经存在
    // process.cwd node进程的当前工作目录
    await checkDire(path.join(process.cwd(), name))
    // promptTypeList命令行交互内容
    inquirer.prompt(promptTypeList).then(result => {
        const { url, gitName, val } = result.type
        console.log("您选择的模版类型信息如下：" + val);
        console.log('项目初始化拷贝获取中...');
        if (!url) {
            console.log(chalk.red(`${val} 该类型暂不支持`))
            process.exit(1)
        }
        // 克隆项目
        exec('git clone ' + url, function (error, stdout, stderr) {
            if (error) {
                return console.log(chalk.red(
                    `clone fail, ${error}`
                ))
            }
            fs.rename(gitName, name, err => {
                if (err) {
                    exec('rm -rf ' +gitName, function (err, out) { })
                    console.log(chalk.red(`The [${name}] project template already exist`))
                } else {
                    console.log(chalk.green(`The [${name}] project template successfully create(项目模板创建成功)`))
                }
            })
        })
    })
}