import { useState } from "react"
import Modal from "./Modal"
import Authentication from "./Authentication"
import { useAuth } from "../context/AuthContext"

export default function Layout(props){
    const {children}=props

    const [showModal, setShowModal]=useState(false)

    const {globalUser, logout}=useAuth()

    const header=(
        <header>
            <div>
                <h1 className="text-gradient">CAFFEIN</h1>
                <p>For caoffee Insatiates </p>
            </div>
            {globalUser ?(
                <button onClick={logout}>
                <p>Logout</p>
                <i className="fa-solid fa-mug-hot"></i>
            </button>) :(
                <button onClick={() => {setShowModal(true) }}>
                <p>Sign up Free</p>
                <i className="fa-solid fa-mug-hot"></i>
            </button>
        )}
        </header>
    )

    const footer=(
        <footer>
            <p><span className="text-gradient">Caffein</span> was made by
            <span className="text-gradient"> Mohid Asmat</span></p>
        </footer>
    )

    function handleCloseModal(){
        setShowModal(false)
    }

    return (
        <>
            {showModal && (
                <Modal handleCloseModal={handleCloseModal}>
                    <Authentication handleCloseModal = {handleCloseModal}/>
                </Modal>
            )}
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}