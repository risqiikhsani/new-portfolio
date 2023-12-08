import Title from "@/components/title"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { projects } from "@/constant/projects"
import Image from "next/image"
import Link from "next/link"

const Page = async () => {
    return (
        <>
            <Title title="Projects" text="Here is projects I've been working on." />
            <Separator className="my-4"/>
            <div className="flex gap-10 ">

                {projects.map((a, i) => (
                    <Card key={i}>
                        <CardHeader>
                            <CardTitle>{a.name}</CardTitle>
                            <CardDescription>type : {a.type}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Image src={a.image} alt={a.name} width="500" height="500" />
                        </CardContent>
                        <CardFooter>
                            <Button asChild>
                                <Link href={a.url}>visit</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}

            </div>

        </>
    )
}

export default Page