let utils = require("../../utils/constants")

  module.exports = class {
      constructor() {
      
           this.name = 'eval'
           this.aliases - ['ev', 'code']
           this.markdown = (type, cont) => "```" + type + "\n" + cont + "```"

       }

       run (client, msg, arg) {
          try {
               if (msg.author.id !== 'your id') return;
               let code = arg.join(" ").replace(/^```(js|javascript ?\n)?|```$/gi, "")
               let out = eval(code)
               if (typeof code !== 'string') code = require("util").inspect(code, { depht: 0 })
               msg.channel.send(this.markdown("js", out))
           } catch (err) {
               msg.channel.send(this.markdown("js", err))
           }
       }

   }
