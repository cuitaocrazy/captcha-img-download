const fs = require('fs')
const path = require('path')
const ffmpeg = require('fluent-ffmpeg')
const axios = require('axios').default

function makeid(length) {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength))
  }
  return result
}

axios.get('https://www.lflhgjj.cn/housingfund/ValidateCode.aspx', { responseType: 'stream' }).then(res => {

  const cmd = ffmpeg(res.data).output(makeid(8)+'.png')
  cmd.run()
})
