export interface Movie {
  id: number;
  title: string;
  rank: number;
  image: string;
  delay: number;
}

export const top10List: Movie[] = [
  {
    id: 1,
    title: "Stranger Things",
    rank: 1,
    image:
      "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABXMlNt8lRlEH5nkoYUHkzaYFsKJJvQq-3wQ4-DyYWQmKlxu9qrynyD5cNZEHPowiQL9IPEPbTSBM9B-id8nR8QPVfL1P_CQjPOqe5ZsDbekwH5AVJbhS3v4gSBXhZb4qdcE6.webp?r=e8a",
    delay: 0,
  },
  {
    id: 2,
    title: "The Great Indian Kapil Show",
    rank: 2,
    image:
      "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABe4sznLOg8Sdj3Hb41y3_ZElp3sPp85TisSBnNXCq5CTYkMQz5peV4SPE3RLzrqJu3Jo_oF9-EOuqzbk3aDJyzJj3372fJ9i_2JIbecvsTL3o8bPQDg7kZ8_pDNLvKhD4Aq0.webp?r=b1f",
    delay: 400,
  },
  {
    id: 3,
    title: "Jolly LLB 3",
    rank: 3,
    image:
      "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTJf3e14TtZ2Z3216UaphDq5nf1SaFyC-0R59wDCSyGdNROqYPTHg8g8SU0kbcn61BMumEkghBN8r11S6_bhQvNJ4oQD4oECM-M.webp?r=e5d",
    delay: 800,
  },
  {
    id: 4,
    title: "Dude",
    rank: 4,
    image:
      "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQFmi2qrQTOShMevIIgOcMdy2h-nqU5swZHnjzJZJbnfTO_oJnzTZp4B8KKOEPMq0DzI2z5-XE4bjchCAQYlPvWR1jBzggTo3sM.webp?r=960",
    delay: 1200,
  },
  {
    id: 5,
    title: "The Girlfriend",
    rank: 5,
    image:
      "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTELBclTkAkJgPaHohb86tSczXpMkZ5Xm0gaL2SgOH9fV5qJEBJsRVyWJgxYba7AnGM4u-MWP3HXAh8lA_H5IZS24mvCNyq65YI.webp?r=24f",
    delay: 1600,
  },
  {
    id: 6,
    title: "Single Papa",
    rank: 6,
    image:
      "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABeCCglLBrw6BajbQyAT0g08g88dk_z2qTbyI1Y9WfinR4rX-udHODVOR5e_XvOu4hpi1TzZs4NJnERhCyHkprPNWdMFfI4zBQtmF3xq6cMrVC_JoV4HU78XwY2lWKOp2qoNs.webp?r=b7b",
    delay: 2000,
  },
  {
    id: 7,
    title: "Haq",
    rank: 7,
    image:
      "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABd-hr2-TdXUEamf_D6vpIxJwKZnueEgjHxa05fdGIYTOXwYvXtkrUhfvtySeRKLFhR7MDZG5cNAtmb52qROa-ZKOftFckYIuFKo.webp?r=4a4",
    delay: 2400,
  },
  {
    id: 8,
    title: "Andhra King Thaluka",
    rank: 8,
    image:
      "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABbR5ns1MvIxFjjwoZkiXVak05rBMNKYnUGhFNzWTpsJwy5BMoKMYSKqBC8hrInC1ce_RKSx4RlCrtr9q0M7912AwblztoKxkZgc.webp?r=ade",
    delay: 2800,
  },
  {
    id: 9,
    title: "The Great Flood",
    rank: 9,
    image:
      "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABXkEYAJ3HkNVF6fUEMKnPf7aEl2G-N-4PUH0ckDltpVVIRn2bjj86nJexAQRGPyru-B1o0mw-X_YtBmMysSbbg7q0wSZqjQgJS7D4EYBaY7lhc3Kf4Rz6ST2zQVdIybAGWuL.webp?r=d59",
    delay: 3200,
  },
  {
    id: 10,
    title: "Raat Akeli Hai - The Bansal Murders",
    rank: 10,
    image:
      "https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABS1-2PXWzkjwgPditAojbfpVT3xfybwleWd5ZxLItIBvbRc9DqjcOB17otGJEWjNmdkdyyEOfqgU-W0fRrPxopHZWrwzQzWwD96ljYztKpxkPLf511UgkGlXitG6pSQOeoKX.webp?r=559",
    delay: 3600,
  },
];

export const getTopMovies = async (): Promise<Movie[]> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(top10List);
    }, 2000);
  });
};
