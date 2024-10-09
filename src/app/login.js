"use client"
import Axios from 'axios'
import React from 'react'

Axios.defaults.baseURL = "http://127.0.0.1:8000"


const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
    return null;
}
async function getToken(){
  await Axios.get('/sanctum/csrf-cookie', {withCredentials: true}).then((res) => console.log(res))
}
async function handleLogin(){
    getToken();
    await Axios.post('/api/sanctum/token', {email: 'mis@toyotanorthedsaservicecenter.com.ph', password: 'Initial@1', device_name: 'iphone'}, {
      headers: {
        Accept: 'application/json',
      }
    })
}

export default function Login() {
  return (
    <div>
      <h1>Click me!</h1>
      <button onClick={handleLogin}>Click</button>
    </div>
  )
}