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

type Story = {
  id: string;
  image: string;
  views: string;
  headline: string;
  category: string;
  date: string;
  status: string;
  link: string;
};

interface IPageProps {
  // story: Story
}

const Page: React.FunctionComponent<IPageProps> = (props) => {
  const { storyId } = useParams()
  const story = stories.find((story) => story.id === storyId);
  if(!story) return
  return (
    <div className='flex w-full flex-col p-12 bg-white'>
      <div className='flex justify-between items-center pb-4'>
        <div className='flex gap-x-2 items-center'>
          <Image src={"https://s3-alpha-sig.figma.com/img/afe7/90e5/7f5b1c14f156ccedaf36ebb4be3ae6d5?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W61kIVfQ19SkPQ2u5DmtQAIrT0v02276unX6OpuVwHPPuPATNO3p3lIUMZUaocEvfeR5qLZoY3pWOBIkVeCGDxXX022OZ6miTe8HiulE1Ny7dP3~a1QpuYFuPDbWbbl-aGJvTC1CoLLySNCzkwDzWozsiXzpHaGsSygUSJ-vaqJUPnuQyfe0XunnxDbP78iiBqhmCiMOFSzzl7OhnW5kIaclCMlaxG83TZQJ37VspWTtZOXJZw1vH6gXWM7j4L7h4kGHn7IieuEwdB4RXRgbnJKpE~fUg7pFIK5hNl-CwGF~0cd6YBngsOnPN-0EgQ9m5EQvrioBVUT0cDbMZv7tiQ__"} width={1080} height={1080} alt='Profile Picture' className='rounded-full h-8 w-8 object-cover' />
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
        <Image src={story.image} width={1000} height={660} alt={story.headline} className='w-full object-cover h-full blur-[3px]' />
        <div className='absolute top-0 left-0 w-full h-full opacity-60 bg-black'></div>
        <div className='absolute top-0 w-full flex justify-center z-[10] h-full py-2 items-center gap-x-8'>
          <button className='bg-[#212121] rounded-md p-1'>
            <ChevronLeft color='white' size={28} />
          </button>
          <Image src={story.image} width={1000} height={660} alt={story.headline} className='max-w-[450px] object-cover h-full rounded-xl' />
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