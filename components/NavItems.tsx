"use client";
import {usePathname} from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems= [
    {label: "Home", href: "/"},
    {label: "Companions", href: "/companions"},
    {label: "MyJourney", href: "/my-journey"},
]

const NavItems = () => {

    const pathname = usePathname()
    return (
        <nav className="flex items-center gap-4">
            {
                navItems.map(({label, href}) => (
                    <Link href={href} key={label} className={cn(pathname === href && 'text-primary font-semibold')}>
                        {label}
                    </Link>
                ))
            }

        </nav>
    )
}
export default NavItems
