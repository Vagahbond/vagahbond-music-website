import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Board()
 {
    console.log(process.env.API_EXTERNAL_HOST)
   return (
     <>
     <Head>
     <title>Create Next App</title>
     </Head>
     Here manage your tracks
     </>
   )
 }



