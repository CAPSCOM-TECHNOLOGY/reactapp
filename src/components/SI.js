import {useFormik} from 'formik'
import { useState } from 'react';
const validate=values=>{
    const errors={}
    if(!values.principal){
        errors.principal="Principal required"
    }
    
    if(!values.rate){
        errors.rate="Rate required"
    }

    if(!values.time){
        errors.time="Time required"
    }
    return errors
};

function SI(){
    let [si,setSI]=useState(0)
    let [amount,setAmount]=useState(0)


const formik=useFormik({
    initialValues:{
        principal:"",
        rate:"",
        time:""        
    },
    validate,
    onSubmit:values=>{
        let p=parseFloat(values.principal)
        let r=parseFloat(values.rate)
        let t=parseFloat(values.time)
        let s=(p*r*t)/100
        let a=p+s
        setSI(s)
        setAmount(a)
    }
})

    return(
        <>
        <fieldset>
            <legend>Simple intereset calculator</legend>
                <form onSubmit={formik.handleSubmit}>
                    <p>
                        <label htmlFor="principal">Principal</label>
                        <input 
                        type="text" 
                        name="principal" 
                        onChange={formik.handleChange} 
                        value={formik.values.principal}/>
                        <small className="error">{formik.errors.principal}</small>
                    </p>
                    <p>
                        <label htmlFor="rate">Rate</label>
                        <input 
                        type="radio" 
                        name="rate" 
                        value="9"
                        onClick={formik.handleChange}
                        /> 9%
                        <input 
                        type="radio" 
                        name="rate" 
                        value="12"
                        onClick={formik.handleChange}
                        /> 12%
                        <input 
                        type="radio" 
                        name="rate" 
                        value="15"
                        onClick={formik.handleChange}
                        /> 15%
                        <small className="error">{formik.errors.rate}</small>
                    </p>
                    <p>
                        <label htmlFor="time">Time(in year)</label>
                        <input 
                            type="radio" 
                            name="time" 
                            value="5"
                            onClick={formik.handleChange}
                            /> 5 years
                        <input 
                            type="radio" 
                            name="time" 
                            value="10"
                            onClick={formik.handleChange}
                            /> 10 years
                        <input 
                            type="radio" 
                            name="time" 
                            value="15"
                            onClick={formik.handleChange}
                            /> 15 years
                            <small className="error">{formik.errors.time}</small>
                    </p>
                    <p>
                        <input type="submit" name="cal" value="Calculate"/>
                    </p>
                </form>

    <h3>Simple intereset: {si}</h3>
    <h4>Amount: {amount}</h4>

                </fieldset>
        </>
    )
}
export default SI