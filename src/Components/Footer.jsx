import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineArrowUp } from "react-icons/ai"
import me from "../Assets/me.png"


const Footer = () => {
  return (
    <footer>
        <div>
            <img src={me} alt='Ritik Raushan' />
            <h2>Ritik Raushan</h2>
            <p>Spending time on learning is investment, not expenditure.</p>
        </div>
        <aside>
          <article>

          <h2>Social Media</h2>
          <a href="https://www.youtube.com/channel/UCM_HfvXNqVF0l9wKr6dxegw" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://www.instagram.com/_ritik.raushan_" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Ritikraushan1" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://facebook.com/ritikraushanofficial" target={"blank"}>
            <AiFillFacebook />
          </a>
          </article>
        </aside>
        <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  )
}

export default Footer