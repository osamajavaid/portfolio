// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Adam Murphy',
    image: "images/avtar.png",
    designation: 'GSR MERL | Grad student at UC Santa Cruz',
    view: "Osama is a great student who is an enthusiastic learner. He is always ready to learn new skills and is a very hard worker. His leadership skills are maturing and he is in the right direction for success.",
    linkednURL: "#"
  },
  {
    id: 1,
    name: 'Adam Murphy',
    image: "images/avtar.png",
    designation: 'GSR MERL | Grad student at UC Santa Cruz',
    view: "Osama is a great student who is an enthusiastic learner. He is always ready to learn new skills and is a very hard worker. His leadership skills are maturing and he is in the right direction for success.",
    linkednURL: "#"
  },
  {
    id: 2,
    name: 'Adam Murphy',
    image: "images/avtar.png",
    designation: 'GSR MERL | Grad student at UC Santa Cruz',
    view: "Osama is a great student who is an enthusiastic learner. He is always ready to learn new skills and is a very hard worker. His leadership skills are maturing and he is in the right direction for success.",
    linkednURL: "#"
  },
  {
    id: 3,
    name: 'Adam Murphy',
    image: "images/avtar.png",
    designation: 'GSR MERL | Grad student at UC Santa Cruz',
    view: "Osama is a great student who is an enthusiastic learner. He is always ready to learn new skills and is a very hard worker. His leadership skills are maturing and he is in the right direction for success.",
    linkednURL: "#"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
