import React, { useEffect } from "react";


export default function Clock() {

  useEffect(() => {
    window.addEventListener("load", () => {
      console.log("loaded!")
    })
    return () => {
      return "cleanup";
    }
  }, [])

  return (
    <div>
      This is the Clock Component
    </div>
  )
}