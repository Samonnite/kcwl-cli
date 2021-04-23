module.exports = {
    promptTypeList: [{
        type: 'list',
        message: '请选择拉取的模板类型',
        name: 'type',
        choices: [{
            name: '客商平台',
            value: {
                url: 'https://gitlab.bjkcwl.com/frontweb/kcwl-brokerweb',
                gitName: 'kcwl-brokerweb',
                val: 'kcwl-brokerweb'
            }
        },
        {
            name: 'crm管理平台',
            value: {
                url: 'https://gitlab.bjkcwl.com/frontweb/kcwl-web',
                gitName: 'kcwl-web',
                val: 'kcwl-web'
            }
        }]
    }]
}