import { Outlet } from "react-router-dom"
import { useEffect } from "react"

import Header from "../components/Header"
import Modal from "../components/Modal"
import { useAppStore } from "../stores/useAppStore"


// Este es el layout de la aplicacion, donde se define el header y el outlet
// que es donde se renderizan las vistas de la aplicacion
export default function Layout() {

  const loadFromStorage = useAppStore((state) => state.loadFromStorage)

  useEffect( () => {
    loadFromStorage()
  }, [])

  return (

    <>
        <Header/>

        <main className="container mx-auto py-16">
          <Outlet/>
        </main>

        <Modal></Modal>
    </>

  )
}
