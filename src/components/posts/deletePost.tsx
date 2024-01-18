'use client'

import { useFormState } from 'react-dom';
import * as actions from '@/actions'
import { Button } from '@nextui-org/react';

interface PostIDProps{
    postId:string
}
export default function DeletePost({postId}:PostIDProps){
    const [formState,action]=useFormState(actions.deletePost.bind(null,postId),{
        errors:{}
      })
    return ( 
    <form action={action} className='m-2'>
          <Button color='danger' variant='ghost' type='submit'>delete post</Button>
          {formState.errors._form?(<div className='border rounded p-2 bg-red-400 text-purple-300'>
            {formState.errors._form?.join(', ')}
          </div>):null}
    </form>)
}