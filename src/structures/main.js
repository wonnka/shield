let { Client, readdirSync, readFileSync, chalk, join } = require('../utils/constants')
require('dotenv').config()

module.exports = class main extends Client {
    constructor() {
    super()
    
        this.prefixes = '!'
        this.token = process.env.TOKEN
        this.cmds = []
        this.categorys = []
        this.loadCmds(join(__dirname, "../commands"))
        
    }

    log (colour, content) {
        console.log(chalk.keyword(colour)(content))
    }
    
    loadCmds (folder) {
        readdirSync(folder).forEach(subFolder => {
            let categorys = subFolder
            this.categorys.push(categorys)
            readdirSync(`${folder}/${subFolder}`).forEach(file => {
                let Cmd = require(`${folder}/${subFolder}/${file}`)
                this.cmds.push(new Cmd())
            })
        })
        return this;
    }

    run (options, msg) {
        if (!(msg.content.startsWith(this.prefix)) || msg.author.bot || !(msg.guild)) return;
        let arg = msg.content.slice(this.prefix.length).split(/ +/g)
        let cmds = this.cmds.filter(ext => ext.name === arg[0] || ext.aliases.includes(arg[0]) != -1)[0]
        if (cmds === null) return;
        cmds.run(options, msg, arg.slice(1))
    }

    start () {
        this.login(this.token)
        this.log('blue', readFileSync("./title.txt").toString())
        return this;
    }

}
