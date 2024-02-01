"use client"
import { addDays, format } from "date-fns"
import * as React from 'react';
import { DateRange } from 'react-day-picker';
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { CalendarIcon, Check, ChevronDown, ChevronsDown, ChevronsUpDown } from 'lucide-react';
import { Calendar } from "./ui/calendar";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import Image from "next/image";
interface ITopbarProps {
}

const Topbar: React.FunctionComponent<ITopbarProps> = (props) => {
    const [date, setDate] = React.useState<DateRange | undefined>({
        from: new Date(2022, 0, 20),
        to: addDays(new Date(2022, 0, 20), 20),
    })
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const [windowWidth, setWindowWidth] = React.useState(1180);

    React.useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const options = [
        {
            value: "Edit Profile",
            label: "Edit Profile",
        },
        {
            value: "Log Out",
            label: "Log Out",
        },
    ]
    return (
        <div className='bg-white h-auto p-2 px-6 xl:px-12 flex justify-between items-center'>
            <Input type="search" placeholder="Search" className='w-48 xl:w-72 bg-gray-100' />
            <div className="flex gap-x-4 rounded-md items-center">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            id="date"
                            variant={"outline"}
                            className={cn(
                                "justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {windowWidth > 1180 ? (
                                date?.from ? (
                                    date.to ? (
                                        <>
                                            {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                                        </>
                                    ) : (
                                        format(date.from, "LLL dd, y")
                                    )
                                ) : (
                                    <span>Pick a date</span>
                                )
                            ) : null}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            initialFocus
                            mode="range"
                            defaultMonth={date?.from}
                            selected={date}
                            onSelect={setDate}
                            numberOfMonths={2}
                        />
                    </PopoverContent>
                </Popover>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[200px] xl:w-[275px] justify-start gap-x-4 py-6"
                        >
                            <Image src={"https://s3-alpha-sig.figma.com/img/a66e/3c58/7b925507a17595d38b9654c3a4847f76?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TltuPRkeSLeuGJf3lHF0aIo39MdITVAjzmUdAhuxxOPgShxmQ~nFgho~zUawM5iJtm~NQOZJZ~t~9Tr4noB31FsfZeddI4e2lM3Pt8qKjKhNeyhZcOkyX01GPFFPx-W9vThTZgfK4qYf1VO~f~bD4SIpxg~dohvxm3nnh4p~31KHuslpTYRj7GwLTZRTULGe6P~2jb~wR8yieNYp1znwI1OduogZi15j6CwmtVbo3mD00xJ5A2pqYxVMzb6vZEEjukKQSoskKEjd8WY~ftXiVtcei4IKupc6ScVD9f~u5ATvSYgbh7vuTQFZFb4wgTdV7Kc4drRaVp5bjKkT~8rTug__"} width={720} height={720} alt="Profile Picture" className="w-7 h-7 rounded-md" />
                            <div className="flex flex-col items-start">
                                <p className="text-gray-600 text-[10px]">Welcome back,</p>
                                <p className="text-[17px] text-gray-700">Akshita Patel</p>
                            </div>
                            <ChevronDown className="ml-auto h-5 w-5 shrink-0 opacity-70" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                        <Command>
                            <CommandGroup>
                                {options.map((framework) => (
                                    <CommandItem
                                        key={framework.value}
                                        value={framework.value}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                value === framework.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {framework.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
};

export default Topbar;
