import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './component-picture.module.scss'
import MapTest from './component-map-test'


export default function Test({ data }){
  const [mapObject, setMapObject] = useState(null);
  return (
    <>
    <MapTest setMapObject={setMapObject} postData={data} pageType='TEST' />
    </>
  )
} 