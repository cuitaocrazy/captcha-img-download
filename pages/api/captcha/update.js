import fs from 'fs'
import path from 'path'

export default (req, res) => {
  const a = req.body
  const data = JSON.parse(fs.readFileSync(path.resolve('data.json')))
  const newData = data.map(d => d.img == req.body.img ? req.body : d)
  const jsonStr = JSON.stringify(newData, null, '  ')
  fs.writeFileSync('data.json', jsonStr)
  res.status(200)
}