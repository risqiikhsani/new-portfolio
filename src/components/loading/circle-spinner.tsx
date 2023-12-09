import Image from "next/image";

export default async function CircleSpinner(){
    return(
        <>
            <div className="flex w-full h-screen items-center justify-center">
            <Image src="/other_files/loading.gif" alt="loading" width={50} height={50} className="animate-spin z-50"/>
            </div>
            
        </>
    )
}