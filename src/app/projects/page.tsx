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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { IoRocketSharp } from "react-icons/io5";
import { Separator } from "@/components/ui/separator"
import { projects } from "@/constant/projects"
import Image from "next/image"
import Link from "next/link"

const Page = async () => {
    return (
        <>
            <Title title="Projects" text="Here is projects I've been working on." />
            <Separator className="my-4" />
            <div className="grid md:grid-cols-2 gap-4">

                {projects.map((a, i) => (
                    <Card key={i} className="hover:border-4 hover:border-cyan-300">
                        <CardHeader>
                            <CardTitle>{a.name}</CardTitle>
                            <CardDescription>type : {a.type}</CardDescription>
                            {a.on_progress && <Alert className="bg-red-400 dark:bg-red-900">
                                <IoRocketSharp className="h-4 w-4" />
                                <AlertTitle>On progress </AlertTitle>
                                <AlertDescription>
                                    Sorry the app is still under development and not ready to visit yet.
                                </AlertDescription>
                            </Alert>}

                        </CardHeader>
                        <CardContent>
                            <Image src={a.image} alt={a.name} width="700" height="700" className="w-full h-full rounded-md" />
                        </CardContent>
                        <CardFooter className="flex justify-end">
                            {!a.on_progress && <Button asChild>
                                <Link href={a.url}>visit</Link>
                            </Button>}

                        </CardFooter>
                    </Card>
                ))}

            </div>

        </>
    )
}

export default Page