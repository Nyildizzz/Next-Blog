"use client"

import React from 'react'
import { ThemeContext } from '@/context/ThemeContext'
import { useContext ,useState, useEffect } from 'react'



function ThemeProvider({children}) {
    const {theme} = useContext(ThemeContext)
    const [mounted, setMounted] = useState(false)

    useEffect(() =>{
        setMounted(true)
    },[mounted])
    if(mounted){
        return (
            <div className={theme}>{children}</div>
          )
    }
    
  
}

export default ThemeProvider