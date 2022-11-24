import React from 'react'
import Link from "next/Link"
export default function Navbar() {
    return (
        <nav>
            <div className='linkhome'>
                <Link href="/" legacyBehavior>
                    <a>Coder Wikipedia</a>
                </Link>

            </div>
            <div>
                <Link href="/about" legacyBehavior>
                    <a>About</a>
                </Link>
                <Link href="/coders" legacyBehavior>
                    <a>All Coders</a>
                </Link>


            </div>

        </nav>
    )
}
