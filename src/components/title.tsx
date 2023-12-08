import { CardDescription, CardTitle } from "./ui/card";

export default async function Title({title,text}:{title:string,text:string}) {
    return (
        <>
            <CardTitle >{title}</CardTitle>
            <CardDescription >{text}</CardDescription>
        </>
    )
}