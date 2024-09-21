export default function Input({label,type,id}){
    return(
        <div className="control">
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} name={id} required/>
        </div>
    )
}