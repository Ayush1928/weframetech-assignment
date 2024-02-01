import { Eye, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import statusUp from '../../public/status-up.svg'

interface IStoriesSectionProps {
}

export const stories = [
    {
        id: "1",
        image: "https://s3-alpha-sig.figma.com/img/d146/1468/65a8273af2cbbc88616b1353aee1e51d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A1MYJeatG66NDI-1tvg9e8PHf~etrR-ZNzrDT0QymvzSArV161hJtHsc0qWG2~Arnp~4BhQxNc90VWgaLZYEM2c-fmxCLF4e3V7xVjrLlPNGdtHyoceOqepNCY3pdX5pArgw2zO~PQcUe5ZvxXTiYD5Oq-ZunycV9RsD2iYHyjV9Qipp~qxgm4qUcrL9sFLt7HcafNd1LkT2V4hhN0Kh50uPayQHf277SegRIkH6Sr4V7m2Tv6ZYn7aeLOaNhIJz2vJmxP14NMNnj08b43sT~mYGWPHOazqOUWk7xcJSn-OUHTpTlAPZa-xrm7DrUsktaYgJ~Ccr2l-GlRq9xvirDQ__",
        views: "428",
        headline: "How 7 lines code turned into $36 Billion Empire",
        category: "BUSINESS",
        date: "20 Sep 2022",
        status: "Published",
        link: "/",
    },
    {
        id: "2",
        image: "https://s3-alpha-sig.figma.com/img/9460/88e4/1fcf6ae1c41573d1edb5f8df03f55286?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pOfdVDFwOh5RcxPTqxygaV3NjBgCrcjRk4xYBmrh5tWg1n7v5TPDA7DwXUijXQIJTOSMQ9V~0f3~4wilXytrxF-9v48Ww3NjCLDJaakX34lKR1mvjDgWoXKNLsxetFZcPSn1vy1YWF2RZPpuyd9osCpMfw88v~5VZMI1u6ZXcBc1uaqJVgTiR-zkBSjHcww357MqtHLjFvGFDZhnq4OGlWfnZc1ai7tXl8pLDJ28zNIK2SgfmghlL1YKnSFROMx87tJYfwbi0HSXtGvIlp11nNt0ZDUvdidDqYubxu8IGZ0jMdj85MoVqmsOR3SzFQu8Fb1Zh7FkY727b~4h-PmOcg__",
        views: "428",
        headline: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
        category: "BUSINESS",
        date: "20 Sep 2022",
        status: "Created",
        link: "/",
    },
    {
        id: "3",
        image: "https://s3-alpha-sig.figma.com/img/76f2/c230/759217edfe5f1a091005f8427421914b?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BqC4ussHPXxuNSmc2hMfucgNc177mydiPBH7llAybh~9gF0t1Spc9KcE0YVSStXZ7CQNLmfEhG~e9c37RveFjlrJnV55Yv1S4f40YIAk7x3qlFv7dYyDMnyYn5NOiEUsMciME0okV7-9FYVJi2ZUSFxTq3EvDEjRmTOwBVBv~R~jIb4N9I8K9Yo-c6gf2EoYcdeIJZ3WMGv2tne6~Mbsx94giB8JAfVgJlHcyc98rmLU6Trf4kHg9R7P28N9sO3TeQM3eO~iFTkz~4KdxV1VhXmzYY2bTu~~J1B4EPplBucl6oJpU7tpBWAaDFttu2ttuEp6oQkC9BpvWcl8gqxGIg__",
        views: "428",
        headline: "Teknion wins Gold at 2022 International Design Awards",
        category: "POLITICS",
        date: "20 Sep 2022",
        status: "Draft",
        link: "/",
    },
    {
        id: "4",
        image: "https://s3-alpha-sig.figma.com/img/8961/e90a/522b89a6e06ce18044367a842aca9275?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fsL~-vLodp4kD7h8n69Go-u7PjxqG78PgHr6FFfMBEBVR9dfovZjnMnG65G1zC31pUEg-7~YQBHsbGWSLJqXIcKqp3IkGfZD8cwB1oH4lkYezVpmyKAhiOcyT0kRNE9leWAvEqpjZe60w8T6MPGBYPgHyuuoIaYPgCPzkthRrOX4TNu0bxYW8kTqyYPAZyhC16wjOTjLi3S74ZEMfrQcBKTtCMQdGAwNb3FlyLUMIlA61mU1jEXzq1q8oj3UpvzLa~afntHH8K5tDE4z6ysIy02HGWiKYgNsq0CWw8BnQrKQVGDLmfuoqD3WrczSTkki9cTjSUFnHUZYwaIWAvDjsg__",
        views: "428",
        headline: "How 7 lines code turned into $36 Billion Empire",
        category: "BUSINESS",
        date: "20 Sep 2022",
        status: "Published",
        link: "/",
    },
    {
        id: "5",
        image: "https://s3-alpha-sig.figma.com/img/8961/e90a/522b89a6e06ce18044367a842aca9275?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fsL~-vLodp4kD7h8n69Go-u7PjxqG78PgHr6FFfMBEBVR9dfovZjnMnG65G1zC31pUEg-7~YQBHsbGWSLJqXIcKqp3IkGfZD8cwB1oH4lkYezVpmyKAhiOcyT0kRNE9leWAvEqpjZe60w8T6MPGBYPgHyuuoIaYPgCPzkthRrOX4TNu0bxYW8kTqyYPAZyhC16wjOTjLi3S74ZEMfrQcBKTtCMQdGAwNb3FlyLUMIlA61mU1jEXzq1q8oj3UpvzLa~afntHH8K5tDE4z6ysIy02HGWiKYgNsq0CWw8BnQrKQVGDLmfuoqD3WrczSTkki9cTjSUFnHUZYwaIWAvDjsg__",
        views: "428",
        headline: "How 7 lines code turned into $36 Billion Empire",
        category: "BUSINESS",
        date: "20 Sep 2022",
        status: "Published",
        link: "/",
    },
    {
        id: "6",
        image: "https://s3-alpha-sig.figma.com/img/8961/e90a/522b89a6e06ce18044367a842aca9275?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fsL~-vLodp4kD7h8n69Go-u7PjxqG78PgHr6FFfMBEBVR9dfovZjnMnG65G1zC31pUEg-7~YQBHsbGWSLJqXIcKqp3IkGfZD8cwB1oH4lkYezVpmyKAhiOcyT0kRNE9leWAvEqpjZe60w8T6MPGBYPgHyuuoIaYPgCPzkthRrOX4TNu0bxYW8kTqyYPAZyhC16wjOTjLi3S74ZEMfrQcBKTtCMQdGAwNb3FlyLUMIlA61mU1jEXzq1q8oj3UpvzLa~afntHH8K5tDE4z6ysIy02HGWiKYgNsq0CWw8BnQrKQVGDLmfuoqD3WrczSTkki9cTjSUFnHUZYwaIWAvDjsg__",
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
                        <Image src={story.image} width={761} height={999} alt={story.headline} className='rounded-lg min-h-[400px] object-cover overflow-hidden' />
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
                                    <Image src={statusUp} width={16} height={16} alt='Views Icon' />
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
