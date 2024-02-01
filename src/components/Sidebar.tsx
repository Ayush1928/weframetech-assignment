import { AreaChart, Bell, CircleUserRound, Headset, Home, MonitorSmartphone, NotebookText, PlaySquare, Settings, UsersRound } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

interface ISidebarProps {
}

const sidebarItems = [
    {
        name: "Dashboard",
        icon: <Home className='h-5 w-5 group-hover:text-white' />,
        link: "/dashboard"
    },
    {
        name: "Content",
        icon: <NotebookText className='h-5 w-5 group-hover:text-white' />,
        link: "/content"
    },
    {
        name: "Team",
        icon: <UsersRound className='h-5 w-5 group-hover:text-white' />,
        link: "/team"
    },
    {
        name: "User",
        icon: <CircleUserRound className='h-5 w-5 group-hover:text-white' />,
        link: "/user"
    },
    {
        name: "App/Web",
        icon: <MonitorSmartphone className='h-5 w-5 group-hover:text-white' />,
        link: "/appweb"
    },
    {
        name: "Analytics",
        icon: <AreaChart className='h-5 w-5 group-hover:text-white' />,
        link: "/analytics"
    },
    {
        name: "Media",
        icon: <PlaySquare className='h-5 w-5 group-hover:text-white' />,
        link: "/media"
    },
    {
        name: "Notifications",
        icon: <Bell className='h-5 w-5 group-hover:text-white' />,
        link: "/notifications"
    },
    {
        name: "Settings",
        icon: <Settings className='h-5 w-5 group-hover:text-white' />,
        link: "/settings"
    },
]

const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => {
    return (
        <div className='bg-white min-h-screen w-1/6 flex flex-col'>
            <div className="flex-1 flex h-full w-full flex-col justify-center items-center gap-y-2 px-6">
                {sidebarItems.map((item,index) => (
                    <Link href={item.link} className="flex group p-4 rounded-lg justify-start w-full gap-x-4 items-center hover:bg-[#7950F2]" key={index}>
                        {item.icon}
                        <p className='text-sm text-[#53545C] font-semibold group-hover:text-white'>{item.name}</p>
                    </Link>
                ))}
            </div>
            <div className='mt-auto px-6 pb-2'>
                <Link href={"/support"} className="flex group bg-[#E8E9FF] p-4 rounded-lg justify-start w-full gap-x-4 items-center hover:bg-violet-300">
                    <Headset  className='h-5 w-5' />
                    <p className='text-sm text-[#1C1D22] font-semibold'>Contact Support</p>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
