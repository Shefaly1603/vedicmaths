// src/lib/sutras.ts
export type Item = {
  slug: string;
  title: string;
  summary: string;
};

export const SUTRAS: Item[] = [
  {
    slug: "ekadhikena-purvena",
    title: "Ekadhikena Pūrvena",
    summary: "‘By one more than the previous’ – fast squares of numbers ending in 5.",
  },
  {
    slug: "nikhilam-navatascaramam-dasatah",
    title: "Nikhilam Navataścaramam Daśatah",
    summary: "‘All from 9 and last from 10’ – rapid multiplication near bases 10/100/1000.",
  },
];

export const SUB_SUTRAS: Item[] = [
  {
    slug: "anurupye",
    title: "Anurūpye Śūnyamanyat",
    summary: "‘If one is in ratio, the other is zero’ – proportion based shortcuts.",
  },
  {
    slug: "sisyate-sesasamjnah",
    title: "Śiṣyate Śeṣasaṁjñah",
    summary: "‘The remainder remains the same’ – remainder tricks for division.",
  },
];
