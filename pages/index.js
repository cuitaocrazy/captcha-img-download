import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import ImgLabelItem from '../components/ImgLabelItem'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [datas, setDatas] = useState([])
  const getData = () => axios.get('/api/captcha/list', { responseType: 'json' }).then(res => setDatas(res.data))
  const newData = () => axios.post('/api/captcha/new')
  useEffect(getData, [])
  const items = datas.map(({ label, img }) => <ImgLabelItem key={img} label={label} img={img} onSave={data => {
    axios.post('/api/captcha/update', data).then(getData())
    getData()
  }} />)
  return (
    <div>
      <div className="sticky top-0 z-50"><button className="bg-yellow-700 text-yellow-100" onClick={() => {
        newData().then(getData)
      }}>新建</button></div>
      <div>
        {items}
      </div>
    </div>
  )
}
