import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Board()
 {

  const [isAuth, setAuth] = useState(false)

  useEffect(() => {
    async function fetchTruc() {
      try {
        const { data } = await axios.get('/');
      } catch (e) {
        console.error(e);
      }
    }
  
    fetchTruc();
  });
  console.log(isAuth)
   return (
     <>
     <Head>
       Administration panel
     </Head>
     <span className="bg-gray-50">
     Welcome to the administration panel. <br/>
        you are {
          isAuth ? 
          'connected' :
          'disconnected'
        }.
     </span>
        
     </>
   )
 }



