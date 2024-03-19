import { Outlet } from "react-router-dom"
import { LandingHeader } from "../sections/LandingHeader/LandingHeader"
import { LandingFooter } from "../sections/LandingFooter/LandingFooter"

export const LandingTemplate = () => {
  return (
    <>
        <LandingHeader/>
        <Outlet/>
        <LandingFooter/>
    </>
  )
}
