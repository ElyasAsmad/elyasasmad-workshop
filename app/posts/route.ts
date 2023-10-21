import { NextResponse } from "next/server";

const contentExampleArray = [
  {
    id: "1",
    name: "Elon Ma",
    username: "@yelon.ma",
    photoURL:
      "https://i1.sndcdn.com/avatars-XpzN0ujJa3iI96PS-hKizHQ-t500x500.jpg",
    content:
      "Just had a blast at the Full-Stack Fusion mobile app workshop in IIUM! 🚀💻 It's incredible to see so much talent and innovation in one room. Keep pushing the boundaries of what's possible! 🔥 #FullStackFusion #Innovation #MobileApps",
    createdAt: "19 mins",
    data: {
      likes: 250,
      reposts: 100,
      comments: 50,
    },
  },
  {
    id: "2",
    name: "Bill Gates",
    username: "@bill",
    photoURL:
      "https://www.gatesfoundation.org/-/media/gfo/3about/3people/ga311881_bill_gates.jpg",
    content:
      "Thrilled to be a part of the Full-Stack Fusion mobile app workshop. The energy and creativity here are inspiring. These young developers are the future of technology, and I'm excited to see the innovation they'll bring to the world. 🌐💡 #FullStackFusion #Innovation #TechFuture",
    createdAt: "3 hrs",
    data: {
      likes: 250,
      reposts: 100,
      comments: 50,
    },
  },
  {
    id: "3",
    name: "Hakim Nazry",
    username: "@hakim.nazry",
    photoURL: "https://randomuser.me/api/portraits/men/80.jpg",
    content: "Full-stack fusion is fun! I'm glad everyone likes it. 🗿",
    createdAt: "Yesterday",
    data: {
      likes: 250,
      reposts: 100,
      comments: 50,
    },
  },
  {
    id: "4",
    name: "Sarah Johnson",
    username: "@sarahj",
    photoURL: "https://randomuser.me/api/portraits/women/45.jpg",
    content:
      "Had a fantastic time at the Full-Stack Fusion workshop today. The future of technology is looking bright with these talented individuals. 🌟 #FullStackFusion #TechEnthusiast",
    createdAt: "5 hrs",
    data: {
      likes: 150,
      reposts: 75,
      comments: 30,
    },
  },
  {
    id: "5",
    name: "John Smith",
    username: "@johnsmith",
    photoURL: "https://randomuser.me/api/portraits/men/64.jpg",
    content:
      "Just attended an amazing Full-Stack Fusion event at the local tech hub. The enthusiasm and innovation in the room were infectious. 🔥 #TechCommunity #FullStackFusion",
    createdAt: "2 days",
    data: {
      likes: 180,
      reposts: 90,
      comments: 40,
    },
  },
  {
    id: "6",
    name: "Emily Chen",
    username: "@emilyc",
    photoURL: "https://randomuser.me/api/portraits/women/21.jpg",
    content:
      "Full-Stack Fusion is the place to be for tech enthusiasts. Met some incredible people and learned a lot. 🤓 #Networking #Learning",
    createdAt: "1 week",
    data: {
      likes: 120,
      reposts: 60,
      comments: 25,
    },
  },
  {
    id: "7",
    name: "David Kim",
    username: "@davidk",
    photoURL: "https://randomuser.me/api/portraits/men/37.jpg",
    content:
      "Excited to see the potential of Full-Stack Fusion. These workshops are a breeding ground for innovation. 🚀 #FullStackFusion #InnovationHub",
    createdAt: "3 weeks",
    data: {
      likes: 210,
      reposts: 80,
      comments: 45,
    },
  },
  {
    id: "8",
    name: "Alicia Martinez",
    username: "@aliciam",
    photoURL: "https://randomuser.me/api/portraits/women/10.jpg",
    content:
      "Impressed by the level of talent at Full-Stack Fusion. These young minds are reshaping the tech landscape. 🌍💻 #FutureTechLeaders",
    createdAt: "1 month",
    data: {
      likes: 190,
      reposts: 70,
      comments: 35,
    },
  },
  {
    id: "9",
    name: "Samuel Roberts",
    username: "@samuelr",
    photoURL: "https://randomuser.me/api/portraits/men/75.jpg",
    content:
      "Full-Stack Fusion is where ideas come to life. The possibilities are endless with such creative minds. 💡 #InnovationNation #TechForward",
    createdAt: "2 months",
    data: {
      likes: 220,
      reposts: 85,
      comments: 55,
    },
  },
  {
    id: "10",
    name: "Takeya Genji",
    username: "@nrmnqdds",
    photoURL:
      "https://italeemc.iium.edu.my/pluginfile.php/22336/user/icon/remui/f1?rev=136547",
    content: "aku takkan tipu bro",
    createdAt: "5 months",
    data: {
      likes: 420,
      reposts: 69,
      comments: 69,
    },
  },
];

export async function GET(req: Request) {
  return NextResponse.json(contentExampleArray);
}
