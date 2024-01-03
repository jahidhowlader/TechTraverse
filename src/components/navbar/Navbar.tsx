import Link from "next/link";
import AuthLinks from "./AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { FaLinkedin, FaSquareFacebook, FaSquareGithub } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-4">
            <div className="text-2xl text-primary-color font-semibold">
                <Link href={'/'}>TechTraverse</Link>
            </div>
            <div className="flex items-center gap-3">
                <AuthLinks />
            </div>

            <div >
                <ul className="flex items-center gap-2">
                    <li>
                        <Link href="https://www.facebook.com/jahidhowlader.info" target="_blank">
                            <FaSquareFacebook className="w-5 h-auto text-[#0866ff]" />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/jahidhowlader" target="_blank">
                            <FaSquareGithub className="w-5 h-auto " />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.linkedin.com/in/jahidhowlader" target="_blank">
                            <FaLinkedin className="w-5 h-auto text-[#0a66c2]" />
                        </Link>
                    </li>
                    <ThemeToggle />
                </ul>
            </div>
        </div>
    );
};

export default Navbar;