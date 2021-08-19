import { useState } from "react"

export const useForm=(initialForm,validations,refName,refEmail,refSubject,refMessage)=>{
    const [egg,setEgg] = useState(false)
    const [form,setForm] = useState(initialForm)
    const [errors,setErrors] = useState({})
    const [loader,setLoader] = useState(false)
    const [response,setResponse] = useState(null)
    
    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
        
        if (e.target.value === "adventure" || e.target.value === "robinett" || e.target.value === "warren" || e.target.value === "Adventure" || e.target.value === "Robinett" || e.target.value === "Warren") setEgg(true)
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        setErrors(validations(form,refName,refEmail,refSubject,refMessage))
        
        if(form.name !== "" && form.email !== "" && form.subject !== "" && form.message !== "" && Object.keys(errors).length === 0){
            setLoader(true) 
            fetch("https://formsubmit.co/ajax/minaverryagustin@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: `${form.name}`,
                    email: `${form.email}`,
                    subject: `${form.subject}`,
                    message: `${form.message}`
                })
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                setResponse("El formulario fue enviado exitosamente")
                setLoader(false)
                setForm(initialForm)
            })
            .catch(error =>{
                console.log(error)
                setResponse("Hubo un error en el envío del formulario")
                setLoader(false)
            })
        }else return
    }
    
    return {
        form,errors,loader,response,egg,handleChange,handleSubmit
    }
}