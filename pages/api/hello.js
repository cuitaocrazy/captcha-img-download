// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'

export default (req, res) => {
  fs.writeFileSync("./a.txt", "abc")
  res.status(200).json({ name: 'John Doe' })
}
