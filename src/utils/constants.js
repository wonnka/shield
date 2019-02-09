const { Client, Attachment, Collection, RichEmbed } = require('discord.js')
const { readdirSync, readFileSync } = require('fs')
const { join } = require("path")
const chalk = require('chalk')
const axios = require('axios')
const jimp = require("jimp")

module.exports = {
    Client,
    Attachment,
    Collection,
    RichEmbed,
    readdirSync,
    readFileSync,
    join,
    chalk,
    axios,
    jimp
}
