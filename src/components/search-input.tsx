'use client'
import * as actions from '@/actions'
import { Suspense } from 'react'
import { Input } from "@nextui-org/react"
import { useSearchParams } from "next/navigation"


export default function SearchInput(){
    const searchParms=useSearchParams();
    return <form action={actions.search}><Input name='term' defaultValue={searchParms.get('term') || ""} placeholder='search...' color='secondary'/>
    </form>
}