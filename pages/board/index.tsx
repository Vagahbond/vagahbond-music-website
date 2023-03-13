import Head from 'next/head'
import React from 'react'
import { fetchHandle, Sender } from '../../lib/fetchConfig';

export default function Board()
 {

   return (
     <>
     <Head>
      <title>Admin board</title>
     </Head>
     <span className="bg-gray-50">
     Welcome to the administration panel. <br/>
        you are connected.
     </span>
        
     </>
   )
 }

 export async function getStaticProps() {
  try {
    await fetchHandle.api<{data}>('/', Sender.INTERNAL);

    return {
      props: {},
    }
  } catch (e) {
    console.log(e);

    if (e.statusCode == 401) {
      return {
        redirect: {
          destination: '/'
        }
      }
    }
    else {
      console.error(e)
    }
  }

  return {
    props: {},
  }
}



