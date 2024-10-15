"use client"

import DomainCart from '@/components/mintdomain/domainCart'
import MyDomains from '@/components/mintdomain/myDomains'
import Search from '@/components/mintdomain/search'
import React, { useState, useEffect } from 'react'

const Page = () => {
    const [subPage, setSubPage] = useState(0);
    const [searchName, setSearchName] = useState("");
    const [isMobile, setIsMobile] = useState(false);

    // Check screen size on load and resize
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 640); // Set breakpoint for mobile view (768px)
      };
      handleResize(); // Check screen size on initial load
      window.addEventListener('resize', handleResize); // Add event listener for resize
  
      return () => window.removeEventListener('resize', handleResize); // Cleanup event listener
    }, []);
    return (
        < div className='relative'>
            {subPage == 0 && !isMobile && (
                <Search setSearchName={setSearchName} setPage = {setSubPage} />
            )}
            {subPage == 0 && isMobile && (
                <DomainCart searchName={searchName} setPage = {setSubPage} />
            )}
            {subPage == 1 && (
                <DomainCart searchName={searchName} setPage = {setSubPage} />
            )}
            {subPage == 2 && (
                <MyDomains setPage = {setSubPage} />
            )}
        </div>
    )
}

export default Page