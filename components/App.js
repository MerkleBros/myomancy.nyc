import { IntroView } from "./IntroView.jsx"
import { IdolView } from "./IdolView.jsx"
import { StarSignView } from "./StarSignView.jsx"
import { MapView } from "./MapView.jsx"
import { DivinationView } from "./DivinationView.jsx"
import { Route, Routes, Navigate } from "react-router-dom"

export function App() {
  return (
    <Routes>
      <Route path="/introView" element = { <IntroView /> } />
      <Route path="/idolView" element = { <IdolView /> } />
      <Route path="/starSignView" element = { <StarSignView /> } />
      <Route path="/mapView" element = { <MapView /> } />
      <Route path="/divinationView" element = { <DivinationView /> } />
      <Route path="*" element = { <IntroView /> } />
    </Routes>
  )
}
