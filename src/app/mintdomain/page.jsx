"use client"

import DomainCart from '@/components/mintdomain/domainCart'
import MyDomains from '@/components/mintdomain/myDomains'
import Search from '@/components/mintdomain/search'
import React, { useState } from 'react'

const Page = () => {
    const [subPage, setSubPage] = useState(0);
    const [searchName, setSearchName] = useState("");
    return (
        <>
            {subPage == 0 && (
                <Search setSearchName={setSearchName} setPage = {setSubPage} />
            )}
            {subPage == 1 && (
                <DomainCart searchName={searchName} setPage = {setSubPage} />
            )}
            {subPage == 2 && (
                <MyDomains setPage = {setSubPage} />
            )}
        </>
    )
}

export default Page