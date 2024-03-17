import React from "react"

interface LayoutProps{
    children:React.ReactNode
}

export default function Layout({children}:LayoutProps){
    return <React.Fragment>{children}</React.Fragment>
}