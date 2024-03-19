import { LandingRoutes } from "@/modules/landing/routes/LandingRoutes"
import { Route, Routes } from "react-router-dom"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={<LandingRoutes/>}/>
    </Routes>
  )
}
