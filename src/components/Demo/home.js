import { useEffect, useState } from 'react'

import Loader from 'react-loaders'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from './AnimatedLetters'
import './index.scss'
import styles from './index.scss'
import './index.css'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ' DHARUN PRAKASH'.split('')
  const jobArray = 'MERN Stack Developer'.split('')
  const interestArray = 'React|Express|MongoDB'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={interestArray}
              idx={30}
            />
          </h1>
          <h2>
          Building Scalable Web Applications | Crafting Seamless User Experiences with MERN | Developing Full-Stack Solutions
          </h2>
          {/* <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link> */}
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
