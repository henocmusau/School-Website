import Image from 'next/image'
import React from 'react'

import heroImage from '@/assets/images/hero.jpeg'

export default function Hero() {
    return (
        <section className='hero'>
            <div className='basis-1/2 pl-16'>
                <h2 className='text-big'>Amazing title</h2>
                <p className='text-paragraph mt-8 text-balance'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure voluptatibus fugiat rem molestiae dolor magni ratione perspiciatis quaerat nemo exercitationem libero dolorem et, officia deserunt ut cumque voluptates aliquam ipsa?</p>
            </div>

            <div className='overflow-hidden rounded-md basis-1/2 flex justify-end w-full'>
                <Image
                    // width={200}
                    // height={200}
                    src={heroImage}
                    alt='Hero Image'
                    className='rounded-md h-[25rem] float-right object-contain object-center'
                />
            </div>
        </section>
    )
}
