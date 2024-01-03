"use client"
import { link } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../themeToggle/ThemeToggle";

const navLink = [
    { name: "Home", href: '/' },
    { name: "Contact", href: '/contact' },
    { name: "About", href: '/about' }
]

const AuthLinks = () => {

    // TODO: ACTIVE ROUTE
    const pathName = usePathname()

    const status = "unauthenticated"

    return (
        <>
            <ul className="flex items-center gap-5 text-lg">
                {
                    navLink.map(link => {
                        // const isActive = pathName.startsWith(link.href)

                        // console.log(25, link.href.length);

                        return <li
                            key={link.name}
                            className={``}
                        >
                            <Link href={link.href} >{link.name}</Link>
                        </li>
                    })
                }

                {
                    status === "unauthenticated" ? (
                        <li>
                            <Link href="/login">
                                Login
                            </Link>
                        </li>
                    ) : (
                        <>
                            <li>
                                <Link href="/write" >
                                    Write
                                </Link>
                            </li>
                            <span>
                                Logout
                            </span>
                        </>
                    )
                }
            </ul>
        </>
    );
};

export default AuthLinks;