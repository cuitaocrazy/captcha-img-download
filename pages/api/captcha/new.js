import fs from 'fs'
import path from 'path'
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

export default async (req, res) => {
  const data = JSON.parse(fs.readFileSync('data.json'))
  const filename = makeid(8) + '.png'
  await axios.get('https://www.lflhgjj.cn/housingfund/ValidateCode.aspx', { responseType: 'stream' }).then(res => new Promise((resolve, reject) => {
    const cmd = ffmpeg(res.data)
      .output('public/captcha-imgs/' + filename)
      .on('end', resolve)
      .on('error', reject)
    cmd.run()
  }))
  data.unshift({img: filename, label: ''})
  const jsonStr = JSON.stringify(data, null, '  ')
  fs.writeFileSync('data.json', jsonStr)
  res.status(200).json(data)
}
