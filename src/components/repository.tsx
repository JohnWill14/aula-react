interface RepositoryProps{
    namerepo:string 
    full_name: string 
    link: string 
    lang: string
}
 
 export function Repository(props: RepositoryProps){

    return (
        <a target='_blanck' href={props.link}>
              <h3>{props.namerepo}</h3>
              <span>{props.full_name} - {props.lang}</span>
        </a>
    )
}
