import Title from "@/components/title"
import { Separator } from "@/components/ui/separator"

const Page = async () => {
    return (
        <>
            <Title title="Blogs" text="Here is some blogs that I find interesting." />
            <Separator className="my-4" />
            <div className="flex flex-col gap-10 ">

            </div>
        </>
    )
}

export default Page