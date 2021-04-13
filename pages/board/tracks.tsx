import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Board()
 {

  const [isAuth, setAuth] = useState(false)

  useEffect(() => {
    axios.get('/').
    then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    })
  })
  console.log(isAuth)
   return (
     <>
     <Head>
     <title>Create Next App</title>
     </Head>
     Here manage your tracks
     </>
   )
 }



