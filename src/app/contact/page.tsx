import Title from "@/components/title";
import Image from "next/image";
import TextWithCopyButton from "./_page/text-with-copy-button";


const Page = async () => {
    return (
        <>
            <div className="flex flex-col gap-10 justify-center items-center">
                <Title title="Contact" text="Wanna have a chat ? please email me !" />
                <TextWithCopyButton text="risqiikhsani16@gmail.com" />
                <Image src="/contact_files/email.gif" height="500" width="500" alt="email" />
            </div>
        </>
    )
}

export default Page