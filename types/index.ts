import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  textStyles: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit" | "reset";
  rightIcon?: string;
  isDisabled?: boolean
}

export interface SearchTitleProps {
  title: string,
  setTitle: (title: string) => void
}

export interface MoviesProps {
  id: string;
  title: string;
  imageUrl: string;
  type?: string;
  year: number;
  position?: number;
  overview?: string;
  rating?: number;
  advisedMinimumAudienceAge?:number;
  streamingInfo?:[];
}
