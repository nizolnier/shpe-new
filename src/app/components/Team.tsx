'use client'
import { useState } from 'react'
import w1 from "../assets/wave2.svg"
import w2 from "../assets/wave3.svg"
import w1m from "../assets/wave2-mobile.svg"
import w2m from "../assets/wave3-mobile.svg"
import TeamCard from "./TeamCard"
import TeamModal from './TeamModal'
import Modal from "@mui/material/Modal"
interface Prop {
  isMobile: any
}

interface Member {
  id: number,
  name: string,
  pos: string,
  pic: string,
  major: string,
  linkedin: string,
  email: string,
  age: number,
  futureJob: string,
  bio: string,
  hobbies: Array<string>
}

const members = [
  {
    id: 1,
    name: "Hernan Hernandez-Garcia",
    pos: "President",
    pic: "/board/hernan.jpg",
    major: "Aerospace Engineering",
    linkedin: "https://www.linkedin.com/in/hernanhernan/",
    email: "president@shpeucf.com",
    age: 24,
    futureJob: "Space!",
    hobbies: ["Mechatronics", "Video Games", "Grilling!"],
    bio: `I'm an Aerospace Engineering major currently serving as the President of SHPE UCF. Since my sophomore year, I have been leading workshops for over 50 members, helping them develop their technical skills. Some of the projects I created and led are now proudly featured on other members' resumes. Over the past year, I worked with Northrop Grumman within their space systems sector. I'm passionate about inspiring others and fostering a community of growth and support within SHPE UCF.`
  },
  {
    id: 2,
    name: "Vimalys Rivera Caceres",
    pos: "External Vice President",
    pic: "/board/vimalys.jpg",
    major: "Computer Science",
    linkedin: "https://www.linkedin.com/in/vimalys-rivera-caceres/",
    email: "corporateaffairs@shpeucf.com",
    age: 22,
    futureJob: "Tech",
    hobbies: ["Staying active in nature", "Avid Reader", "Spending time with cats"],
    bio: "Hello, everyone! My name is Vimalys and I am a senior majoring in Computer Science. I'm currently interning at Bank of America as a Software Engineer and have previously interned at Lockheed Martin. I've been a Florida local for a lot of my life but I am a proudddd Puerto Rican 🏆!! I have two amazinggg cats (message me if you want pictures haha I love to show them off). A personal goal of mine is to travel to all 50 states and enjoy all my favorite foods in their country of origin. "
  },
  {
    id: 3,
    name: "Ariana Rodriguez Velez",
    pos: "Internal Vice President ",
    pic: "/board/ariana.jpg",
    major: "Industrial Engineering",
    linkedin: "https://www.linkedin.com/in/arodriguezvelez",
    email: "internalvp@shpeucf.com",
    age: 20,
    futureJob: "Tech, Renewable Energy, Fin-Tech, Pharma",
    hobbies: ["Music", "Puzzles", "Traveling", "Hiking"],
    bio: `Holis! My name is Ariana Rodriguez Velez, I am a proud Puerto Rican in my third year as an Industrial Engineering student. I was the MentorSHPE director in the previous year and am excited to help all I can this year at SHPE UCF. I have done previous internships at Lockheed Martin as Program Planning CWEP and at Eli Lilly as a Supply Chain intern. A fun fact about me is that I've been playing cello for the past 6 years!`
  },
  {
    id: 4,
    name: "Daniel Ugueto",
    pos: "Treasurer",
    pic: "/board/daniel.jpg",
    major: "Mechanical Engineering",
    linkedin: "https://www.linkedin.com/in/danielugueto/",
    email: "treasurer@shpeucf.com",
    age: 18,
    futureJob: "Themed Entertainment Engineering",
    hobbies: ["Volleyball", "Cooking", "Guitar", "Playing Video Games"],
    bio: "Hello I am Daniel Ugueto and I am from Venezuela. I am a second year Mechanical Engineering Major that wants to work for a themed entertainment company in the future. I love to hang out with friends and watch sports, espcially formula 1."
  },
  {
    id: 5,
    name: "Rafael Guerrero",
    pos: "Secretary",
    pic: "/board/guerrero.jpg",
    major: "Mechanical Engineering",
    linkedin: "https://www.linkedin.com/in/rafgue/",
    email: "secretary@shpeucf.com",
    age: 22,
    futureJob: "Technology, Space, Manufacturing",
    hobbies: ["Soccer", "Board Games", "Binge Watching"],
    bio: `Que lo queee! My name is Rafael and I am from the beautiful island, República Dominicana. I am a senior Mechanical Engineering major who loves to eat, play board games, soccer, and wants to see the world.`
  },
  {
    id: 6,
    name: "Justin Hoyos",
    pos: "Projects Co-Chair",
    pic: "/board/justin.jpg",
    major: "Computer Sceince",
    linkedin: "https://www.linkedin.com/in/justinhoyos/",
    email: "projects@shpeucf.com",
    age: 19,
    futureJob: "Cyber Engineering",
    hobbies: ["One piece", "Coding", "Gaming"],
    bio: `Hey! My name is Justin and I am a Cuban from Miami! I am currently a second-year Computer Science student and I work as a Cyber Engineer in the Defense Industry. I hope to one day create a career as a Software Engineer in the Biomedical or Fintech Industries as well. I look forward to being your Projects Co-Chair and bringing you cool, interactive workshops weekly! `
  },
  {
    id: 7,
    name: "Jonathan Camacho",
    pos: "Projects Co-Chair",
    pic: "/board/jonathan.jpg",
    major: "Computer Sceince",
    linkedin: "https://www.linkedin.com/in/jc150/",
    email: "projects@shpeucf.com",
    age: 20,
    futureJob: "Software Developer in the space industry",
    hobbies: ["Bad Bunny", "Traveling", "Space"],
    bio: `Hello! My name is Jonathan Camacho and i am from Puerto Rico.  I am a third-year Computer science major and work at the Propulsion and Energy Research Lab at UCF.  A fun fact is that I have several Pilot's License ratings. `
  },
  {
    id: 8,
    name: "Gabriela A. Cárdenas Sánchez",
    pos: "Marketing Chair",
    pic: "/board/gabriela.jpg",
    major: "Industrial Engineering",
    linkedin: "https://www.linkedin.com/in/gabriela-cardenas-sanchez-966b43234",
    email: "marketing@shpeucf.com",
    age: 23,
    futureJob: "Project Management, Technical Design, Drafting",
    hobbies: ["Sports", "Modeling", "F1", "Sewing", "Amusement parks", "Music", "Traveling", "Concerts", "Try new things and adventures"],
    bio: `Hey! My name is Gabriela, I was born in Maracay, Venezuela, my grandparents where Colombian (Medellin) and Lebanese (Zgharta) immigrants in Venezuela. I'm majoring in Industrial Engineering and minoring in Business Administration. Fun fact about me: I do rappel since I was 2 years old. I also want to be an architect and a fashion designer living in Italy, that's why I'm learning my forth language (Italian)`
  },
  {
    id: 9,
    name: "Sophia Mosquera",
    pos: "Socials Chair",
    pic: "/board/sophia.jpg",
    major: "Civil Engineering",
    linkedin: "https://www.linkedin.com/in/sophia-mosquera/",
    email: "socials@shpeucf.com",
    age: 20,
    futureJob: "Automotive Engineering",
    hobbies: ["Scuba diving", "Working out", "Cooking"],
    bio: `Hi! I’m Sophia, a second year Civil Engineering Student. I currently work at Terracon as a Geotechnical Intern, and in the summer I will be a VDC Intern at Whiting Turner. I am Colombian, but grew up in Jacksonville, and a fun fact about me is I also work in the Outdoor Adventure Center in the RWC.`
  },
  {
    id: 10,
    name: "Isabella Ortega",
    pos: "SHPETinas Chair",
    pic: "/board/isabella.jpg",
    major: "Industrial Engineering",
    linkedin: "https://www.linkedin.com/in/isabellaortega/",
    email: "shpetinas@shpeucf.com",
    age: 19,
    futureJob: "Operational Analysis",
    hobbies: ["Crocheting", "Cooking", "Watching Shows and Movies"],
    bio: `Hey! My name is Isabella (or Isa) and I'm a second year industrial engineering major. I am from So-Flo and am Venezuelan. I am here to support my fellow women in STEM any way I can.`
  },
  {
    id: 11,
    name: "Sergio Paez",
    pos: "Pro Dev Co-Chair",
    pic: "/board/sergio.jpg",
    major: "Computer Engineering",
    linkedin: "https://www.linkedin.com/in/sergioluispaez/",
    email: "sergiopaez@ucf.edu",
    age: 19,
    futureJob: "Technology",
    hobbies: ["Biking/exploring", "Listening to music", "Hitting the gym", "Playing sports"],
    bio: `Hi yall! My name is Sergio Paez, I am a first-generation Venezuelan American (born and raised in Miami, FL) and I am currently serving as one of SHPE UCF's Pro Dev Co-Chairs. This past summer, I was an Operations Services Intern on the Logistics Data Solutions Team at NVIDIA, and have previously participated in programs held by Jane Street, Vanguard, and Accenture. I have a passion for solving problems, and aspire to utilize both software/hardware to solve the world's toughest challenges. Outside of school, I like to ride my bike around the Orlando area, explore new sights, and stay up to date with new music!`
  },
  {
    id: 12,
    name: "Nicholas Caballero",
    pos: "Pro Dev Co-Chair",
    pic: "/board/nicholas.jpg",
    major: "Mechanical Engineering",
    linkedin: "https://www.linkedin.com/in/nicholas-caballeroswag/",
    email: "profnickcaba@gmail.com",
    age: 21,
    futureJob: "Research, Entertainment and Automobile Industry",
    hobbies: ["Cooking", "Lifting", "Watching shows"],
    bio: "What is up! My name is Nicholas Caballero and I am a Mechanical Engineer major. I have an internship with Siemens-Energy but I wish to one day work in the R&D industry or something that directly brings smiles to people’s faces. I love to cook, bedrot while watching shows, and lift! If you ever see me, don’t be afraid to say hi! Excited to work with you all and be one of your Professional Development Chairs. "
  },
  {
    id: 13,
    name: "Alejandra Camejo",
    pos: "Outreach Co-Chair",
    pic: "/board/alejandra.jpg",
    major: "Industrial Engineering",
    linkedin: "www.linkedin.com/in/alejandra-camejo1",
    email: "alejandra.camejo.arrien@gmail.com",
    futureJob: "Project Management/Data Analytics",
    hobbies: ["board games", "Traveling", "Watch TV shows"],
    bio: "Hi everyone, I'm Ale and I'm a first year industrial engineering student! I'm a Venezuelan raised in South Florida. I have been told that I have a resting mad face, but I actually love when people come up to me so feel free to stop me and say hi! I love animals and I'm getting into nature photography. A personal dream of mine is to be touched by a manatee because it's illegal for me to touch them, but not the other way around."
  },
  {
    id: 14,
    name: "Rafael Toranzo",
    pos: "Outreach Co-Chair",
    pic: "/board/toranzo.jpg",
    major: "Industrial Engineering",
    linkedin: "http://www.linkedin.com/in/rafael-toranzo",
    email: "ra075977@ucf.edu",
    futureJob: "Industrial Waste Management ",
    hobbies: ["Hang out with friends", "Play Rocket League", "Watch TV shows"],
    bio: "Hello everyone, my name is Rafael Toranzo and I am so looking forward to great year of working diligent and having fun with SHPE as the Outreach Chair and I hope we can all have another great year working together and creating yet another exceptional SHPE JR. Conference!"
  },
  {
    id: 15,
    name: "Steven Matute",
    pos: "MentorSHPE Co-Chair",
    pic: "/board/steven.jpg",
    major: "Civil Engineering",
    linkedin: "http://www.linkedin.com/in/stevenmatute",
    email: "st689571@ucf.edu",
    age: 23,
    futureJob: "Building, Construction, Design",
    hobbies: ["Martial arts", "Video games", "Trying new foods"],
    bio: "Hello! My name is Steven and I am a first gen here at UCF and my family is from Colombia and Honduras! I am a Civil Engineer major with previous internship experience in multple construction companies. I love theme parks and anything building, design and construction!"
  },
  {
    id: 16,
    name: "Alejandro Giraldo",
    pos: "MentorSHPE Co-Chair",
    pic: "/board/alej.jpg",
    major: "Civil Engineering",
    linkedin: "https://www.linkedin.com/in/alejandro-giraldo/",
    email: "alegiraldo05@gmail.com",
    age: 21,
    futureJob: "Construction Management",
    hobbies: ["Rock Climbing", "Racing Games", "F1"],
    bio: "Hi! I'm Alejandro, your MentorSHPE co-director. I'm 21 years old and a Civil Engineering student; I'm pursuing a career in construction management and am more than happy to help out anyone who is interested in the industry!"
  },
  {
    id: 17,
    name: "Nicole Nascimento",
    pos: "Tech Co-Chair",
    pic: "/board/nicole.jpg",
    major: "Computer Science",
    linkedin: "https://www.linkedin.com/in/nicole-zolnier/",
    email: "nizocareer@gmail.com",
    age: 22,
    futureJob: "Technology",
    hobbies: ["Listening to music", "Cooking", "Watching movies"],
    bio: "Hey! My name is Nicole and I am from the best country in South America: Brazil! I am a fourth-year Computer Science major, work as an Undergraduate Teaching Assistant for Intro to C and as a Software Engineer at UCF. This summer I had my first internship. A fun fact is that I built and designed the website that you are in right now!"
  },
  {
    id: 18,
    name: "Yousef Osman",
    pos: "Tech Co-Chair",
    pic: "/board/yousef.jpg",
    major: "Computer Engineering",
    linkedin: "https://www.linkedin.com/in/youosman/",
    email: "@gmail.com",
    age: 22,
    futureJob: "Technology",
    hobbies: ["Going out", "Gaming", "Watching movies"],
    bio: "Hi! My name is Yousef and I am a junior Computer Engineering major! I'm Egyptian and Puerto Rican Currently in an internship at Lockheed Martin working as a software engineer, I look forward to working with all of you guys! "
  }
]

const Team = ({ isMobile }: Prop) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState<any>(undefined);

  const handleOpen = (id: number) => {
    console.log("here")
    let mem = members.find(x => x.id === id)
    setIsClicked(mem)
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false);
    setIsClicked(undefined);
  }

  return (<main id="team" className="h-full">
    {isClicked && (<Modal
      open={isOpen}
      onClose={handleClose}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <TeamModal member={isClicked} close={handleClose} id={isClicked.id} />
    </Modal>
    )}
    <img className="w-[100%]" src={isMobile ? w1m.src : w1.src} />
    <section className="h-full max-w-[100%] w-screen bg-[#2A3342] py-[2rem] flex flex-col justify-around items-center pb-[6rem]">
      <article className="w-[80%] 2xl:h-[16rem] lg:h-[12rem] h-[10rem] justify-around flex flex-col text-start py-6 pb-10">
        <h2 className="2xl:text-7xl text-white lg:text-4xl text-[1.6rem] font-bold lg-pb-0 pb-4">Get to know our Team</h2>
        <p className="2xl:text-3xl text-slate-400 text-xl font-medium">Know the faces of SHPE UCF</p>
      </article>
      <section className="w-[90%] h-full flex flex-wrap justify-around gap-[3rem]">
        {members.map((mem) => (
          <TeamCard key={mem.id} handleOpen={handleOpen} id={mem.id} name={mem.name} pic={mem.pic} pos={mem.pos} />
        ))}
      </section>

    </section>
    <img className="w-[100%] bg-white" src={isMobile ? w2m.src : w2.src} />
  </main>
  )
}

export default Team