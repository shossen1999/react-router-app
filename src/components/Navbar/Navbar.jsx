import { useState } from "react";
import Link from "../Link/Link";

import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";



const Navbar = () => {

    const [open,setOpen]=useState(false);
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Products", path: "/products" },
        { id: 4, name: "Product Details", path: "/products/:id" },
        { id: 5, name: "Contact", path: "/contact" }
    ];


    return (
        <nav className="bg-yellow-200 text-black p-8">
            <div className="md:hidden" onClick={()=> setOpen(!open)}>
                {
                    open === true ? <ImCross></ImCross> :  <AiOutlineMenu className=""></AiOutlineMenu>
                }
          

            </div>
{/*    ${open ? '' : 'hidden'} */}
            <ul className={`md:flex absolute duration-1000 md:static
            ${open ? 'top-55' : '-top-60'}
            bg-yellow-200 px-6`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;