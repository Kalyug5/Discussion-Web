import { redirect } from "next/navigation";
import { searchPost } from "@/db/queries/posts";
import PostList from "@/components/posts/post-list";

interface SearchPageProps{
    searchParams:{
        term:string
    }
}


export default async function SearchPage({searchParams}:SearchPageProps) {

    const {term}=searchParams

    if(!term){
        redirect('/')
    }

    return <div>
        <PostList fetchData={()=>searchPost(term)}/>
    </div>
    
}