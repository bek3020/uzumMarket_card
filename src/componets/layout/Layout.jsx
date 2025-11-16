import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
      <>
          <Header />
          <main>
              <div className='container w-max-[1000px] w-[100%]'>
                  <div className="card_box grid">
                      
                </div>
              </div>
          </main>
      </>
  )
}

export default Layout