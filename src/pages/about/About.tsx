import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'

function About() {
    const {dataUser} = useContext<any>(UserContext)

    useEffect(() => {
        console.log(dataUser.login)
    },[])

  return (
    <div>About</div>
  )
}

export default About