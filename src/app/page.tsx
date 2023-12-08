import Carousel from "@/components/carousel";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { backend, data_science, dev_ops, languages, frontend, machine_learning, game_dev } from "@/constant/expertise";
import { introduction } from "@/constant/introduction";
import { ExpertiseType } from "@/types";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const imageData = [
  "/pictures/1.jpg",
  "/pictures/2.jpg",
  "/pictures/3.jpg",
  "/pictures/4.jpg",
  "/pictures/5.jpg",
  "/pictures/6.jpg",
  "/pictures/7.jpg",
  "/pictures/8.jpg",
  "/pictures/9.jpg",
  "/pictures/10.jpg",
  "/pictures/11.jpg",
  "/pictures/12.jpg",
  "/pictures/13.jpg",
  "/pictures/14.jpg",
  "/pictures/15.jpg",
  "/pictures/16.jpg",
  "/pictures/17.jpg",
  "/pictures/18.jpg"
]

const sections = [
  { title: 'Languages', data: languages },
  { title: 'Back end', data: backend },
  { title: 'Front end', data: frontend },
  { title: 'Dev ops', data: dev_ops },
  { title: 'Data science', data: data_science },
  { title: 'Machine learning', data: machine_learning },
  // Add more sections as needed
];

export default function Page() {
  const renderSection = (title: string, data: ExpertiseType[]) => (
    <div key={title}>
      <p>{title}</p>
      <div className="flex gap-2 flex-wrap">
        {data.map((a, i) => (
          <Badge
            key={i}
            variant="outline"
            className={a.currently_use ? "bg-lime-400 dark:bg-slate-300 dark:text-slate-900" : ""}
          >
            {a.name}
          </Badge>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-10 ">
      <div className="flex flex-col gap-4 justify-center items-center">
        <Avatar className="w-40 h-40">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <CardTitle className="text-center italic">Risqi Ikhsani</CardTitle>
        <CardTitle className="text-center">a.k Hypernova</CardTitle>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-center">Introduction</CardTitle>
          <CardDescription className="text-center">A little about me</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="font-sans text-lg">{introduction}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-center">My Expertise</CardTitle>
          <CardDescription className="text-center">Some technologies I've worked with</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {sections.map(({ title, data }) => renderSection(title, data))}
        </CardContent>
      </Card>

      <CardTitle className="text-center">Some pictures describe my hobbies</CardTitle>
      <CardDescription className="text-center">Feel free to look around, Here are the pictures of things that I like to do in my spare time, or favorite things I love about.</CardDescription>
      <Carousel slides={imageData} />

      <Card>
        <CardHeader>
          <CardTitle className="text-center">My Public Accounts</CardTitle>
          <CardDescription className="text-center">The places to find me</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-2 md:justify-evenly">
          <div className="flex items-center gap-2 border p-10 rounded-xl md:w-fit">
            <FaGithub className="w-10 h-10" />
            <p>Github</p>
          </div>
          <div className="flex items-center gap-2 border p-10 rounded-xl md:w-fit">
            <FaFacebookSquare className="w-10 h-10" />
            <p>Facebook</p>
          </div>
          <div className="flex items-center gap-2 border p-10 rounded-xl md:w-fit">
            <FaInstagram className="w-10 h-10" />
            <p>Instagram</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
