import React from "react";
import c from "./FormsControls.module.css"

// @ts-ignore
export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={`${c.formControl} ${hasError ? c.error : ''}`}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

// @ts-ignore
export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={`${c.formControl} ${hasError ? c.error : ''}`}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}