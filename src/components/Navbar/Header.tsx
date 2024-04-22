import React from 'react'
import Navbar from './Navbar'

export default function Header() {
    return (
        <header className='w-full shadow'>
            <div className='flex justify-between items-center py-2 containerWidth'>
                <strong className='text-2xl font-bold uppercase text-primary'>Brand</strong>
                <Navbar />
                <div>Others</div>
            </div>
        </header>
    )
}
