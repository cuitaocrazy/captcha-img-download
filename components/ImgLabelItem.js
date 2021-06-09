import { useState } from "react"

const ImgLabelItem = ({ img, label, onSave }) => {
  const [_label, setLabel] = useState(label)
  return <div className="my-2">
    <img className="inline-block" src={'/captcha-imgs/' + img} />
    <input type='text' value={_label} onChange={(e) => setLabel(e.target.value)} className="w-12 rounded-md border-solid border-2 mx-2" />
    <button className="rounded-md border-solid border-2 text-blue-900 px-2" onClick={ () => onSave({img, label: _label})}>保存</button>
  </div>
}

export default ImgLabelItem