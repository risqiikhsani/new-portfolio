import Title from "@/components/title"
import Image from "next/image"

const Page = async () => {
    return (
        <>
            <div className="flex flex-col gap-10 justify-center items-center">
                <Title title="Contact" text="Wanna have a chat ? please email me !" />
                <Image src="/contact/email.gif" height="500" width="500" alt="email" />
            </div>
        </>
    )
}

export default Page