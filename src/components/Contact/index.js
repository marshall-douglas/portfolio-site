import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'mado_gmail',
                'template_cn873hs',
                form.current,
                'lOrwsUruc0AteOc8D'
            )
            .then(
                () => {
                  alert('Message successfully sent!')
                  window.location.reload(false)
                },
                () => {
                  alert('Failed to send the message, please try again')
                }
              )
    }
    
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','M','e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in full time opportunities - especially ambitious or large projects. However, if you'd like to contact me
                        regarding any other matters, don't hesitate to contact me using below form either.
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type ="text" name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type ="email" name="email" placeholder='Email' required />
                                </li>
                                <li>
                                    <input type ="text" name="subject" placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type ="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faAngular} color ="#DD0031" />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color ="#F06529" />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color ="#28A4D9" />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color ="#5ED4F4" />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color ="#EFD81D" />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt} color ="#EC4D28" />
                </div>
            </div>
        </div>
            </div>
            
            
            <Loader type="pacman" />
        </>

    )

}

export default Contact