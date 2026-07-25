import CardMark from "@/app/components/CardMark/CardMark"


type CardProps =  {
    id: string
}


export default function Card({id}: CardProps){
    return(
        <>
            <CardMark id={id}/>
        
        </>
    )
}