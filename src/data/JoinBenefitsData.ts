import tvIcon from "../assets/images/tv-icon.png";
import downIcon from "../assets/images/down-icon.png";
import watchIcon from "../assets/images/watch-icon.png";
import kidsIcon from "../assets/images/kids-icon.png";


export interface JoinBenefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const joinBenefits: JoinBenefit[] = [
  {
    id: 1,
    title: "Enjoy on your TV",
    description:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    icon: tvIcon,
  },
  {
    id: 2,
    title: "Download your shows to watch offline",
    description:
      "Save your favourites easily and always have something to watch.",
    icon: downIcon,
  },
  {
    id: 3,
    title: "Watch everywhere",
    description:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: watchIcon,
  },
  {
    id: 4,
    title: "Create profiles for kids",
    description:
      "Send kids on adventures with their favourite characters — free with your membership.",
    icon: kidsIcon,
  },
];

export function getJoinBenefits(): Promise<JoinBenefit[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(joinBenefits);
    }, 2000);
  })}