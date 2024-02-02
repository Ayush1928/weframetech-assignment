"use client"
import Image from 'next/image';
import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { stories } from '@/components/StoriesSection';
import { useParams } from 'next/navigation';
import profilePicture from "../../../../public/profilePicture.jpg"
interface IPageProps {
}

const Page: React.FunctionComponent<IPageProps> = (props) => {
  const { storyId } = useParams()
  const story = stories.find((story) => story.id === storyId);
  if(!story) return
  return (
    <div className='flex w-full flex-col p-12 bg-white'>
      <div className='flex justify-between items-center pb-4'>
        <div className='flex gap-x-2 items-center'>
          <Image src={profilePicture} width={720} height={480} alt='Profile Picture' className='rounded-full h-8 w-8 object-cover' loading='eager'/>
          <p className='text-lg font-semibold text-[#A0A3BD]'>James Robert</p>
          <p className='text-lg font-semibold text-[#58A4FF]'>Created on {story.date}</p>
        </div>
        <div className='flex gap-x-2 justify-stretch'>
          <Select>
            <SelectTrigger className="w-[180px] placeholder:font-bold bg-[#FAFAFA]">
              <SelectValue placeholder="Accessibilty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="public">Pubic</SelectItem>
              <SelectItem value="private">Private</SelectItem>
            </SelectContent>
          </Select>
          <button className='flex items-center bg-[#FAFAFA] w-1/4 py-1 rounded-lg justify-center'>
            <MoreHorizontal className='text-[#7750F1] font-extrabold' size={28} />
          </button>
        </div>
      </div>
      <div className='flex-grow relative h-[600px]'>
        <Image src={story.image} width={1000} height={660} alt={story.headline} className='w-full object-cover h-full blur-[3px]' loading='eager'/>
        <div className='absolute top-0 left-0 w-full h-full opacity-60 bg-black'></div>
        <div className='absolute top-0 w-full flex justify-center z-[10] h-full py-2 items-center gap-x-8'>
          <button className='bg-[#212121] rounded-md p-1'>
            <ChevronLeft color='white' size={28} />
          </button>
          <Image src={story.image} width={1000} height={660} alt={story.headline} className='max-w-[450px] object-cover h-full rounded-xl' loading='eager' />
          <button className='bg-[#212121] rounded-md p-1'>
            <ChevronRight color='white' size={28} />
          </button>
        </div>
        <div className='absolute top-0 w-full flex flex-col z-[20] h-full py-2 items-center gap-x-8'>
          <div className='max-w-[450px] flex mt-auto p-3 flex-col gap-y-4'>
            <p className='text-white text-4xl font-bold'>
              Chez pierre restaurant in Monte Carlo by Vuidafieri Partnerc
            </p>
            <div className='py-2 px-8 rounded-md text-[#9058FF] bg-[#F7EEFF] w-min font-semibold'>
              {story.category}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;