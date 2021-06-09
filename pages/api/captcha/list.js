import fs from 'fs'
import path from 'path'
export default (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.resolve('data.json')))
  res.status(200).json(data)
}