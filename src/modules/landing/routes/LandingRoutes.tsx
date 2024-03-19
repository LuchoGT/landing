import { Route, Routes } from "react-router-dom"
import { LandingTemplate } from "../templates/LandingTemplate"
import { HomePage } from "../pages/HomePage/HomePage"

export const LandingRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingTemplate/>}>
            <Route path="/" index element={<HomePage/>}/>
        </Route>
    </Routes>
  )
}
