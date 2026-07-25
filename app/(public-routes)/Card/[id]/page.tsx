import Card from "../page";

type Props = {
    params: Promise<{id: string}>
}

export default async function CardId({params}: Props){
    const {id}= await params;


    return(
        <>
            <Card id={id}/>
        </>
    )
}