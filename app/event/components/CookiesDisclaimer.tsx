"use client"
import { useEffect, useState } from "react";

export const CookiesDisclaimer = () => {
    const [showCookies, setShowCookies] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShowCookies(false)
        }, 5000)
    }, [])

    if (showCookies) {
        return (
            <div className="bg-networking-green text-black font-bold rounded-sm px-3 py-2 text-sm flex items-center justify-center fixed bottom-5 right-5">Tato stránka nepoužívá cookies</div>
        )
    } else {
        return null
    }
}