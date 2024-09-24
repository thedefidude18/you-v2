import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Card, Divider } from '@mui/material'

const Notfound = ({ setSearch, setFound, setNotfound }) => {
    return (
        <div className='w-full h-screen flex justify-center'>
            <div className='w-[96%] h-full'>
                <h2 className="font-poppins text-xl font-medium leading-4 tracking-wide text-left py-5">My Domains (0)</h2>
                <Card className='h-[143px] rounded-[15px] flex justify-center items-center'>
                    <h2 className='font-poppins text-2xl font-medium leading-4 tracking-wide text-left'>No domains found</h2>
                </Card>
                <div className='w-full flex justify-center mt-20'>
                    <button className='bg-[#423F96] w-[86px] text-[#FFFFFF] rounded-md h-[30px] flex justify-evenly items-center'>
                        <ArrowBackIosIcon className='opacity-50 text-lg' />
                        <Divider orientation="vertical" flexItem />
                        <ArrowForwardIosIcon className='text-lg' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Notfound