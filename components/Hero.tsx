"use client"
import Image from "next/image"
import CustomButton from "./CustomButton"

const Hero = () => {
  const handleScroll = () => {

  }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find movie for evening - quickle and easily
        </h1>
        <p className="hero__subtitle">Say NO to long search and ruined evening </p>

        <CustomButton
          title="Explore Movies"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero_img.png" alt="hero" fill className="object-contain"/>
        </div>
      </div>
      {/* <div className="hero__image-overlay" /> */}
    </div>
  )
}

export default Hero

