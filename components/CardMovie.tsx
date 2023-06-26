'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MoviesProps } from '@/types';
import CustomButton from './CustomButton';
import { WatchMovie } from '@/components'
interface MovieCardProps {
  movie: MoviesProps;
}
const CardMovie = ({ movie }: MovieCardProps) => {
  const { id, title, imageUrl, year, position } = movie;
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="movie-card group">
      <div className="movie-card__content">
        <h2 className="movie-card__content-title">
          {title} {year}
        </h2>
      </div>

      <div className="relative w-full h-80 my-3">
        <Image
          src={imageUrl}
          fill
          priority
          className="object-contain"
          alt="movie cover"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="movie-card__btn-container">
          <CustomButton 
            title="Watch" 
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue mt-2" 
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="./right-arrow.svg"
            handleClick={()=>setIsOpen(true)}
          />
        </div>
      </div>

      <WatchMovie />
    </div>
  );
};

export default CardMovie;
