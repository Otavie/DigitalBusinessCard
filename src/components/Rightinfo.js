import insLogo from '../images/InstagramLogo.png'
import twiLogo from '../images/TwitterLogo.png'
import gitLogo from '../images/GitHubLogo.png'
import lnkLogo from '../images/LinkedInLogo.png'

export default function Rightinfo(){
    return(
        <div className='rightInfo'>
            <div className="rightContent">
                <div className='about'>
                    <h1>About</h1>
                    <div className='aboutContent'>
                        <p>
                            I create beautiful Interfaces with seamless interactivity. Easy to use and very attractive to the eyes.
                        </p>
                        <p>
                            I learn from my mistakes and also learn a lot from others.
                        </p>
                        <p>
                            I am a fan of “the process”.
                        </p>
                    </div>
                </div>
                <div className='skills'>
                    <h1>Skills</h1>
                    <ul className='skillList'>
                        <li>UI/UX Designer</li>
                        <li>HTML, CSS and JavaScript</li>
                        <li>React</li>
                    </ul>
                </div>
            </div>
            <div className="rightIcon">
                <a href="https://github.com/loveotavie"><img src={gitLogo} className='logoSize' alt='GitHub Logo' /></a>
                <a href="https://linkedin.com/in/otavie"><img src={lnkLogo} className='logoSize' alt='LinkedIn Logo'/></a>
                <a href="https://twitter.com/loveotavie"><img src={twiLogo} className='logoSize' alt='Twitter Logo' /></a>
                <a href="https://www.instagram.com/loveotavie"><img src={insLogo} className='logoSize' alt='Instagram Logo'/></a>
            </div>
        </div>
    )
}