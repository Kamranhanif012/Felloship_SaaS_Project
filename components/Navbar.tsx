import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "./NavItems";


const Navbar = () => {
    return (
        <div className="navbar">
            <Link href={"/"}>
            <div className="flex item-center gap-2.5 cursor-pointer">
                <Image
                    src="/images/logo.svg"
                    alt="logo"
                    width={46}
                    height={44}
                />
            </div>
            </Link>
            <div className="flex item-center gap-8">
               <NavItems />
               <SignedOut>
                 <div className="flex items-center gap-3">
                   <SignInButton mode="modal">
                     <button className="btn-signin">Sign in</button>
                   </SignInButton>
                   <SignUpButton mode="modal">
                     <button className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 btn-signin">Sign up</button>
                   </SignUpButton>
                 </div>
               </SignedOut>
               <SignedIn>
                 <UserButton />
               </SignedIn>
            </div>
        </div>
    )
}
export default Navbar

