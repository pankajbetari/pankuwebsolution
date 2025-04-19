import React from 'react'
import Link from 'next/link'
import titlestyle from "@/app/style/titlebanner.module.css"

const Titlebanner = ({ Title, Desc }) => {
    return (
        <>
            {/* // <div>
    //   {Title}
    //   {Desc}
    // </div> */}


            <div className={titlestyle.container}>
                <h1><Link href="/">Home</Link> /{Title}</h1>
                <p>{Desc}</p>
            </div>


        </>
    )
}

export default Titlebanner
