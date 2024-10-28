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
                        }} className="scroll-button btn position-fixed bottom-0 end-0 m-5 rounded-circle" ><i className="bi bi-arrow-up-circle-fill fs-1"></i>
                        </button>) }
                        
        </>
    )
}

export default BotonScroll