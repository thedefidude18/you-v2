"use client"

import Found from '@/components/mintdomain/found'
import Notfound from '@/components/mintdomain/notfound'
import Search from '@/components/mintdomain/search'
import React, { useState } from 'react'


const Page = () => {
    const [search, setSearch] = useState(true);
    const [found, setFound] = useState(false);
    const [notfound, setNotfound] = useState(false);
    return (
        <>
            {search && (
                <Search setSearch={setSearch} setFound={setFound} setNotfound={setNotfound} />
            )}
            {notfound && (
            
                <Found setSearch={setSearch} setFound={setFound} setNotfound={setNotfound} />
            )}
            {found && (
                <Notfound setSearch={setSearch} setFound={setFound} setNotfound={setNotfound} />
            )}
        </>
    )
}

export default Page