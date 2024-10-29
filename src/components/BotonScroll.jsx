import { useState } from "react"

function BotonScroll(){

    let [visible,setVisible] = useState(false)

    window.onscroll = () => {
        setVisible(window.scrollY>200)
    }

    return (
        <>

        {visible && (<button onClick={ () => {
                            window.scrollTo({
                                top:0,
                                behavior: "smooth",
                            })
                        }} className="scroll-button
                        bottom-50 end-0 btn position-fixed m-4 rounded-circle" ><i className="bi bi-arrow-up-circle-fill fs-1" title="Ir hacia arriba"></i>
                        </button>) }
                        
        </>
    )
}

export default BotonScroll