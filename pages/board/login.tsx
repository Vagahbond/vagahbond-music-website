import React, { useState } from "react";
import { fetchHandle, Sender } from "../../lib/fetchConfig";
import { ToastContainer } from 'react-toastify';
import { errorToast, successToast, warningToast } from "../../lib/Toast";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/dist/client/router";
  // minified version is also included
  // import 'react-toastify/dist/ReactToastify.min.css';

export default function Login() {

  const [apiKey, setApiKey] = useState("")
  const router = useRouter()

  const login = () => {
    const loginRequest = async () => {
      fetchHandle.apiKey = apiKey;

      try {
        let res = await fetchHandle.api<{ message }>('/', Sender.EXTERNAL)
        successToast(res.message)
        router.push('/board/')
      }
      catch (e) {
        if (e.statusCode == 401) {
          warningToast("Wrong API key, please try again.");
        } else {
          errorToast(`An error occured : \n ${e.message}`)
        }
        console.error(e)
      }
    }

    loginRequest()
  }

  return (
    <div className="h-screen flex bg-gray-900">
      <div className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 flex flex-col m-auto">
        <div className="mb-6">
          <label className="block text-grey-darker text-sm font-bold mb-2 text-gray-100" htmlFor="api_key">
            Api key
          </label>
          <input 
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 bg-gray-900 text-gray-100" 
            id="api_key" 
            type="password" 
            placeholder="Api key" 
            value={apiKey}
            onChange={ e => setApiKey(e.target.value) } 
          />
          {/* <p className="text-red text-xs italic">Please choose a password.</p> */}
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded text-gray-100" type="button" onClick={login}>
            Log in
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </div>
  )
}

export async function getStaticProps() {
  try {
    await fetchHandle.api<{data}>('/', Sender.INTERNAL);
    return {
      redirect: {
        destination: '/board'
      }
    }
  } catch (e) {

    if (e.statusCode == 401) {
      return {
        props: {},
      }
    }
    else {
      console.error(e)
    }
  }

  return {
    redirect: {
      destination: '/board'
    }
  }
}
