import React from 'react'
import content from "../Content";

export default function NavigationBar() {
    return (
        <div style={{ background: '#091c29' }}>
            <div className="flex  items-center justify-between w-10/12 mx-auto py-3 text-white font-langar">
                <h1 className="text-3xl font-bold">{content.nav.logo}</h1>
                <div>
                    {content.nav.links.map((link, index) => {
                        return <span className="text-xl mr-4" key={index}>{link.text}</span>
                    })}
                </div>
            </div>
        </div>
    )
}


