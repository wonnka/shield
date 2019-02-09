let main = require('./structures/main')
let client = new main()

client.on("message", msg => { client.run(client, msg) })
client.start()
