'use client'

import { Button,Popover,PopoverContent,PopoverTrigger,Input, Textarea } from "@nextui-org/react";
import FormButton from "../common/form-button";
import * as actions from '@/actions'
import { useFormState } from "react-dom";

interface PostCreateFormProp{
    slug:string
}




export default function CreatePostForm({slug}:PostCreateFormProp){

    const [formState,action]=useFormState(actions.createPost.bind(null,slug),{
        errors:{}
    })

    return (
        <Popover placement="left">
            <PopoverTrigger>
                <Button type="submit" color="primary" variant="ghost">create post</Button>
            </PopoverTrigger>
            <PopoverContent>
                <form action={action}>
                    <div className="flex flex-col gap-4 w-80 p-4">
                        <h3 className="text-xl font-bold">Create a Post</h3>
                        <Input isInvalid={!!formState.errors.title} errorMessage={formState.errors.title} placeholder="Title"
                        label="title" name="title" labelPlacement="outside" />
                        <Textarea isInvalid={!!formState.errors.content} errorMessage={formState.errors.content} placeholder="Content" label="Content" name="content" labelPlacement="outside" />
                        {
                            formState.errors._form?<div className="rounded border  bg-red-200 text-red-400 p-2">{formState.errors._form?.join(', ')}</div>:null
                        }
                        <FormButton>Submit</FormButton>

                    </div>
                </form>
            </PopoverContent>

        </Popover>
    )

}