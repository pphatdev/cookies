'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useCookie } from '../@sophat/cookies/src/hooks/useCookies'
import { PlusIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { DataTableDemo, type CookieNames } from '@app/table'


export default function Basic() {
    const {
        getCookie,
        setCookie,
        removeCookie,
        getKeys
    } = useCookie()

    const [cookieNames, updateCookieNames] = useState<CookieNames[]>([])

    useEffect(() => {
        const cookieNames = getKeys()
        const cookies: CookieNames [] = cookieNames.map((name) => ({
            name,
            value: getCookie(name)
        })) as CookieNames[]

        updateCookieNames(cookies)

    }, [])


    const createCookieHandle = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = new FormData(event.currentTarget)
        const data = Object.fromEntries(form)

        // add to cookie
        setCookie(data.cookieName as string, data.cookieValue as string)
        updateCookieNames(
            [...cookieNames, {
                name: data.cookieName as string,
                value: data.cookieValue as string
            }]
        )
    }

    const deleteCookieHandle = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = new FormData(event.currentTarget)
        const data = Object.fromEntries(form)

        removeCookie(data.deleteCookieName as string)
        updateCookieNames(
            cookieNames.filter((item) => item.name !== data.deleteCookieName)
        )
    }

    return (

        <div className='p-5 flex flex-col mx-auto gap-5 max-w-xl'>
            <h1 className='text-5xl font-bold'>Demo</h1>
            <h2 className='text-xl font-medium'>Create Cookie Name</h2>

            <form onSubmit={createCookieHandle} className='flex gap-2'>
                <Input name='cookieName' type="text" placeholder="Cookie Name"/>
                <Input name='cookieValue' type="text" placeholder="Cookie Value"/>
                <Button type='submit' className='cursor-pointer'>
                    <PlusIcon size={24} />
                </Button>
            </form>

            <h2 className='text-xl font-medium'>Delete Cookie Name</h2>

            <form className='flex gap-2' onSubmit={deleteCookieHandle}>
                <Select name='deleteCookieName'>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Cookie" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {cookieNames.map((item, k) => (
                                <SelectItem key={k} value={item.name}>
                                    {item.name}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Button type='submit' variant="destructive">
                    Delete
                </Button>
            </form>

            <h2 className='text-xl font-medium'>Get All Cookie Names</h2>
            <DataTableDemo data={cookieNames}/>
        </div>
    )
}