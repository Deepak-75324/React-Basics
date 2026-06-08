import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card.jsx'
function App() {
  return (
    <>
      <h1 className="bg-blue-500 text-white p-4 rounded-xl ">Tailwind CSS</h1>
      <Card name="Dipak Mandal" designation="Software Engineer" imgSrc="https://media.licdn.com/dms/image/v2/D5603AQH0pAMekDIH5A/profile-displayphoto-crop_800_800/B56ZvxfnIAJIAI-/0/1769283155440?e=1781740800&v=beta&t=ZvW3ngqKzizoJn8YOygNJSF2-gvbOwT85-Ogv2mcbxI" />
      <Card name="Khem Raj Bhatta" designation="AI Engineer" imgSrc="https://media.licdn.com/dms/image/v2/D5603AQEdQIuBFXNJ8A/profile-displayphoto-crop_800_800/B56Zx.UHqnHsAI-/0/1771645730978?e=1781740800&v=beta&t=BKjGjrw_RYOlvLhUQP5fp6qRn3mhbWTuA6xRzZ4sl80" />
      <Card name="Amit Mandal" designation="ILSC Student" imgSrc="https://scontent.fjkr1-1.fna.fbcdn.net/v/t39.30808-1/614595522_1186584830319563_3923772358260974403_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=Wtg261lA9t8Q7kNvwGsj1Rn&_nc_oc=Adotzcqc6-qlee6liuZK6yV91z3ElY0MHECkEmgL0ykhAapz-SlD7UIMvlFf-vwvDdw&_nc_zt=24&_nc_ht=scontent.fjkr1-1.fna&_nc_gid=CrkQL-d29fiDT8MiOMKxjg&_nc_ss=7b2a8&oh=00_Af51AsEVsHYD9xSPspYqDNgYytvqYaBGHf61TmCuCsEquA&oe=6A1E1CA9" />
      <Card name="Sonu Singh" designation="Generative AI Researcher" imgSrc="https://media.licdn.com/dms/image/v2/D5603AQFONFlEyZ0Pfg/profile-displayphoto-crop_800_800/B56Zxm8TxYHUAI-/0/1771253613944?e=1781740800&v=beta&t=CenfN5RYGfO5t3ZYCHkZtDmVCwNkJQkTyZje7Si14xw" />
      <Card name="Kunal Kushwaha" designation="Teacher/ Youtuber" imgSrc="https://media.licdn.com/dms/image/v2/D5603AQEkN21kXiTfag/profile-displayphoto-crop_800_800/B56ZtiGLOyGsAI-/0/1766877345478?e=1781740800&v=beta&t=1nyjpjhZGme39M__PFN_G3dZ0OR20vcOBpYU-C27wHQ" />
      <Card name="Kashish Pidwani" designation="Machine Learning Enthusiast" imgSrc="https://media.licdn.com/dms/image/v2/D5603AQFxyN-insyzpA/profile-displayphoto-crop_800_800/B56Z4rPIv0K0AI-/0/1778841850986?e=1781740800&v=beta&t=H2BuwScJipvAmHTalD4ONgy8XKXlCzPk3k_51kdXTcs" />

    </>
  )
}

export default App
