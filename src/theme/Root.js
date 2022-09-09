import React, {Fragment, useState} from 'react'
import {auth, signInWithGoogle} from './firebase.utils'
import './Root.css'

export default function Root({ children }) {
  const [userAuth, setUserAuth] = useState(null)
  const [authLoading, setAuthLoading] = useState(false)

  auth.onAuthStateChanged(user => {
    if (user !== null) {
      setUserAuth(user)
    }

    setAuthLoading(false)
  }, error => {
    console.error(error)
  })

  const isAllowed = () => userAuth?.email

  if (authLoading) {
    return <div>Loading...</div>
  }

  return (
    <Fragment>
      {isAllowed()
      ? children
      : <div className="login">
          <div className="login__container">
            <h1>Sign in to use the DA-FAQs 2022 App</h1>
            <div>
              <button className="login__btn login__google" onClick={signInWithGoogle}>
                Sign in with Google
              </button>
            </div>
          </div>
        </div>}
    </Fragment>
  )
}
