import * as React from 'react';
import application from '../../public/application.svg'
import advertisement from '../../public/advertisement.svg'
import newspaper from '../../public/newspaper.svg'
import storytelling from '../../public/storytelling.svg'
import Image from 'next/image';
import Link from 'next/link';
interface IContentOptionsProps {
}

const ContentOptions: React.FunctionComponent<IContentOptionsProps> = (props) => {
    const options = [
        {
            name: "Articles",
            icon: newspaper,
            updates: "4,950",
            link: "/content/articles"
        },
        {
            name: "Categories",
            icon: application,
            updates: "10,275",
            link: "/content/categories"
        },
        {
            name: "Stories",
            icon: storytelling,
            updates: "4,193",
            link: "/content/stories"
        },
        {
            name: "Advertisements",
            icon: advertisement,
            updates: "928",
            link: "/content/advertisements"
        },
    ]
    return (
        <div className='flex w-full justify-evenly gap-x-2 xl:gap-x-4 mt-6 flex-wrap xl:flex-nowrap gap-y-4'>
            {options.map((item,index) => (
                <Link href={item.link} className='bg-white w-5/12 xl:w-1/4 flex px-3 py-4 2xl:px-5 2xl:py-6 gap-x-4 items-center rounded-2xl' key={index}>
                    <div className='bg-[#E8E9FF] rounded-full p-3 2xl:p-4'>
                        <Image src={item.icon} width={1080} height={1080} alt='Content Option Icon' className='w-5 h-5 2xl:w-7 2xl:h-7' loading='eager' />
                    </div>
                    <div>
                        <h1 className='text-xl 2xl:text-2xl font-semibold'>
                            {item.name}
                        </h1>
                        <p className='text-[14px]'>
                            {item.updates} New Updates
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ContentOptions;
