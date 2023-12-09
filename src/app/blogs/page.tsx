import Title from "@/components/title"
import { Separator } from "@/components/ui/separator"
import { getAllPostsMeta } from "@/lib/mdx"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid"


const Page = async () => {
    const posts = await getAllPostsMeta()

    return (
        <>
            <Title title="Blogs" text="Here is some blogs that I find interesting." />
            <Separator className="my-4" />
            <div className="gap-10 grid grid-cols-2">
                {posts.map((a, i) => (
                    <Card key={i} className="hover:border-4 hover:border-cyan-300">
                        <CardHeader>
                            <CardTitle>{a.title}</CardTitle>
                            <CardDescription>{a.publishDate}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Image src={a?.imageUrl} alt={a.title} width="700" height="700" className="w-full h-full rounded-md" />
                        </CardContent>
                        <CardFooter className="flex justify-end">
                            <Button asChild>
                                <Link href={`blogs/${a.slug}`} className="items-center flex">
                                    visit<ArrowSmallRightIcon className="ml-4 w-4 h-4" /></Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </>
    )
}

export default Page