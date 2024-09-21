import { useRef,useEffect} from "react";
export default function SubmitModel({handelCloseSubmi,openSubmit}){
    const dialogSubmit = useRef();
    useEffect(() => {
        if (openSubmit) {
            dialogSubmit.current.showModal();
        } else {
            dialogSubmit.current.close();
        }
    }, [openSubmit]);
    
    
    return(
        <dialog className="modal" ref={dialogSubmit} >
            <h3>Your Order Is Sucessfully Placed</h3>
            <form method="dialog">
                <button className="button" onClick={handelCloseSubmi}>Close</button>
            </form>
        </dialog>
    )
}