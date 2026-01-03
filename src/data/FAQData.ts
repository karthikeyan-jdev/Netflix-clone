export interface FAQ {
  id: number;
  question: string;
  answer: string;
}
export const faqData: FAQ[] = [
  {
    id: 1,
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.\n\nYou can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. New TV shows and movies are added every week.",
  },
  {
    id: 2,
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649/month.",
  },
  {
    id: 3,
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web or on any internet-connected device that offers the Netflix app.\n\nYou can also download shows using the iOS or Android app and watch without an internet connection.",
  },
  {
    id: 4,
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    id: 5,
    question: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more.",
  },
  {
    id: 6,
    question: "Is Netflix good for kids?",
    answer:
      "The Netflix Kids experience is included to give parents control while kids enjoy family-friendly content.\n\nKids profiles include PIN-protected parental controls to restrict maturity ratings and block specific titles.",
  },
];

// export async function getFAQData(): Promise<FAQ[]> {
//   return await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(faqData);
//     }, 2000);
//   });
// }
