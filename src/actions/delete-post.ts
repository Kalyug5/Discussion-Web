'use server'
import { db } from "@/db"
import { useSession } from "next-auth/react"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { auth } from "@/auth"


interface deleteProps{
    errors:{
        _form?:string[]
    }
}


export async function deletePost(id:string,formState:deleteProps,):Promise<deleteProps>{

    const session= await auth()
    if(!session?.user || !session){
        return {
            errors:{
                _form:['You must have logged in to perform the deletion']
            }
        }
    }
    try{
        await db.post.delete({
            where:{id}
        })
    }
    catch(err){
        console.log("Error deleting post")
    }

    revalidatePath('/')
    redirect('/')
    //Returning an empty object means that there are no errors
    



}