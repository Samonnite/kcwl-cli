const fs = require('fs')
const chalk = require('chalk')

module.exports = function checkDir(dir, name) {
    let isExists = fs.existsSync(dir)
    if (isExists) {
        console.log(chalk.red(
            `The ${name} project already exists in directory. Please try to use another project`
        ))
        process.exit(1)
    }
}