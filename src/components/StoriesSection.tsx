import { Eye, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import statusUp from '../../public/status-up.svg'
import story1 from "../../public/story1.jpg"
import story2 from "../../public/story2.jpg"
import story3 from "../../public/story3.jpg"
import story4 from "../../public/story4.jpg"
interface IStoriesSectionProps {
}

export const stories = [
    {
        id: "1",
        image: story1,
        views: "428",
        headline: "How 7 lines code turned into $36 Billion Empire",
        category: "BUSINESS",
        date: "20 Sep 2022",
        status: "Published",
        link: "/",
    },
    {
        id: "2",
        image: story2,
        views: "428",
        headline: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
        category: "BUSINESS",
        date: "20 Sep 2022",
        status: "Created",
        link: "/",
    },
    {
        id: "3",
        image: story3,
        views: "428",
        headline: "Teknion wins Gold at 2022 International Design Awards",
        category: "POLITICS",
        date: "20 Sep 2022",
        status: "Draft",
        link: "/",
    },
    {
        id: "4",
        image: story4,
        views: "428",
        headline: "How 7 lines code turned into $36 Billion Empire",
        category: "BUSINESS",
        date: "20 Sep 2022",
        status: "Published",
        link: "/",
    },
    {
        id: "5",
        image: story4,
        views: "428",
        headline: "How 7 lines code turned into $36 Billion Empire",
        category: "BUSINESS",
        date: "20 Sep 2022",
        status: "Published",
        link: "/",
    },
    {
        id: "6",
        image: story4,
        views: "428",
        headline: "How 7 lines code turned into $36 Billion Empire",
        category: "BUSINESS",
        date: "20 Sep 2022",
        status: "Published",
        link: "/",
    },
]
const StoriesSection: React.FunctionComponent<IStoriesSectionProps> = (props) => {
    return (
        <div className='flex flex-col w-full px-2'>
            <div className='flex justify-between my-6'>
                <h1 className='text-2xl font-semibold'>Top Stories</h1>
                <Link href={"/content/stories"} className='text-[#9058FF] text-lg hover:underline'>See All</Link>
            </div>
            <div className='flex overflow-x-auto scrollbar gap-x-4 justify-stretch pb-2'>
                {stories.map((story) => (
                    <div className='relative min-w-[300px] min-h-[400px] rounded-lg' key={story.id}>
                        <Image src={story.image} width={761} height={999} alt={story.headline} className='rounded-lg min-h-[400px] object-cover overflow-hidden' loading='eager'/>
                        <div className='absolute top-0 left-0 flex h-full flex-col justify-end z-[9999] p-3 gap-y-2'>
                            <p className='text-white font-semibold text-xl'>{story.headline}</p>
                            <div className='flex items-center justify-between'>
                                <div className='flex gap-x-1'>
                                    <p className='font-bold text-white'>{story.category}</p>
                                    <span className='flex items-center flex-row font-semibold text-[#D9D9D9]'>
                                        <div className='h-1 w-1 rounded-full bg-[#D9D9D9]'></div>
                                        &nbsp; {story.date}
                                    </span>
                                </div>
                                <div className='text-[#0DAD82] bg-[#E4FFF8] py-1 px-3 rounded-md mr-0'>
                                    {story.status}
                                </div>
                            </div>
                            <div className='flex items-center gap-x-2'>
                                <Link href={`/content/${story.id}`} className='flex justify-center w-5/6 bg-[#E8E9FF] text-[#7750F1] py-3 rounded-lg font-semibold'>
                                    View
                                </Link>
                                <button className='bg-[#F8FAFB] w-1/6 py-3 rounded-lg flex justify-center'>
                                    <MoreHorizontal className='text-[#7750F1]' />
                                </button>
                            </div>
                        </div>
                        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000] from-[50%] to-gray-400 opacity-60 rounded-lg'>
                            <div className='absolute top-0 flex gap-x-2 w-full z-[9999] p-2 justify-end'>
                                <div className='flex bg-white text-[#9058FF] text-xs gap-x-1 py-1 px-2 rounded-md font-semibold'><Eye size={16} /> {story.views}</div>
                                <div className='flex bg-white text-[#9058FF] text-xs gap-x-1 py-1 px-2 rounded-md font-extrabold'>
                                    <Image src={statusUp} width={16} height={16} alt='Views Icon' loading='eager' />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StoriesSection;
