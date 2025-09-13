import heroImg from '../../assets/hero-img.png';
import styles from './HeroStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import { useTheme } from '../common/ThemeContext';
import twitterLight from '../../assets/twitter-light.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import githubLight from '../../assets/github-light.svg';
import cv from '../../assets/cv.pdf';
import twitterDark from '../../assets/twitter-dark.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubDark from '../../assets/github-dark.svg';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;

  return (
    <section id='hero' className={styles.Container}> 
      <div className={styles.colorModeContainer}>
        <img src={heroImg} alt="Profile picture of Somtochim Oguchi" className={styles.hero} />

          <img className={styles.colourMode} onClick={toggleTheme} src={themeIcon} alt="color mode icon" />
          
      </div>
      
      <div className={styles.info}>
        <h1>Somtochim <br/>Oguchi</h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://twitter.com" target='_blank' rel="noopener noreferrer">
            <img src={twitterIcon} alt='Twitter Icon'/>
          </a>
          <a href="https://linkedin.com" target='_blank' rel="noopener noreferrer">
            <img src={linkedinIcon} alt='LinkedIn Icon'/>
          </a>
          <a href="https://github.com" target='_blank' rel="noopener noreferrer">
            <img src={githubIcon} alt='GitHub Icon'/>
          </a>
        </span>
        <p>
          I am a frontend developer with a passion for creating beautiful, functional, 
          and user-friendly websites and applications. I have a strong background in 
          HTML, CSS, and JavaScript, and I am always eager to learn new technologies 
          and improve my skills.
        </p>
      </div>
      
      <a href={cv} download>
        <button className={styles.hover}>RESUME</button>
      </a>
    </section>
  );
}

export default Hero;