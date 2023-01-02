import React, { useRef, useState } from 'react'
import { useEffect } from 'react';

type InputTypeProps = {
    inputElementProps? : React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    alertMessage? : string | JSX.Element,
    alertType? : 'warning' | 'error' | 'success' | 'default' | 'action',
    focusHandler? : (e : React.FocusEvent<HTMLInputElement, Element>) => void
    blurHandler? : (e : React.FocusEvent<HTMLInputElement, Element>) => void
    styleModule? : {
        readonly [key: string]: string;
    },
    inputChildren? : JSX.Element,
    inputChildrenPosition? : 'left' | 'right' | 'both',
    title? : string,
    classNamePrefix? : string
}

 
const Input = (props : InputTypeProps) => {
    const [wrapperClassName,setWrapperClassName] = useState<string>("input-wrapper-focus-off-default");
    const [alertClassName,setAlertClassName] = useState<string>("alert-focus-off-default");
    const [placeholderClassName,setPlaceholderClassName] = useState<string>("placeholder-focus-off-default");
    const [titleClassName,setTitleClassName] = useState<string>("title-focus-off-default");
    const [focus,setFocus] = useState<boolean>(false)
    const prefix = useRef(props.classNamePrefix ? props.classNamePrefix + '-' : '')
    const inputClassName = useRef(`${props.inputElementProps?.className} ${props.styleModule ? `${props.styleModule[`${prefix.current}input-box`]}` : `${prefix.current}input-box`}`)
    const disabledClassName = useRef<string>(props.styleModule ? `${props.styleModule[`${prefix.current}input-disabled`]}` : `${prefix.current}input-disabled`);
    function focusHandler(e : React.FocusEvent<HTMLInputElement, Element>){
        setFocus(true);
        props.focusHandler && props.focusHandler(e);
    }
    function blurHandler(e :  React.FocusEvent<HTMLInputElement, Element>){
        setFocus(false);
        props.blurHandler && props.blurHandler(e);
    }
    
    function classNameHandler(){
        if(focus){

            const wc = `${prefix.current}input-wrapper-focus-on-${props.alertType}`
            const wfc = props.styleModule ? `${props.styleModule[wc]} ${props.styleModule[`${prefix.current}input-wrapper`]}` : `${wc} ${prefix.current}input-wrapper`
            setWrapperClassName(wfc);


            const ac = `${prefix.current}alert-focus-on-${props.alertType}`
            const afc = props.styleModule ? `${props.styleModule[ac]} ${props.styleModule[`${prefix.current}input-alert`]}` : `${ac} ${prefix.current}input-alert`
            setAlertClassName(afc)

            const pc = `${prefix.current}placeholder-focus-on-${props.alertType}`
            const pfc = props.styleModule ? `${props.styleModule[pc]} ${props.styleModule[`${prefix.current}input-placeholder`]}` : `${pc} ${prefix.current}input-placeholder`
            setPlaceholderClassName(pfc)

            const tc = `${prefix.current}title-focus-on-${props.alertType}`
            const tfc = props.styleModule ? `${props.styleModule[tc]} ${props.styleModule[`${prefix.current}input-title`]}` : `${tc} ${prefix.current}input-title`
            setTitleClassName(tfc)
        }else{

            const wc = `${prefix.current}input-wrapper-focus-off-${props.alertType}`
            const wfc = props.styleModule ? `${props.styleModule[wc]} ${props.styleModule[`${prefix.current}input-wrapper`]}` : `${wc} ${prefix.current}input-wrapper`
            setWrapperClassName(wfc);

            const ac = `${prefix.current}alert-focus-off-${props.alertType}`
            const afc = props.styleModule ? `${props.styleModule[ac]} ${props.styleModule[`${prefix.current}input-alert`]}` : `${ac} ${prefix.current}input-alert`
            setAlertClassName(afc)


            const pc = `${prefix.current}placeholder-focus-off-${props.alertType}`
            const pfc = props.styleModule ? `${props.styleModule[pc]} ${props.styleModule[`${prefix.current}input-placeholder`]}` : `${pc} ${prefix.current}input-placeholder`
            setPlaceholderClassName(pfc)


            const tc = `${prefix.current}title-focus-off-${props.alertType}`
            const tfc = props.styleModule ? `${props.styleModule[tc]} ${props.styleModule[`${prefix.current}input-title`]}` : `${tc} ${prefix.current}input-title`
            setTitleClassName(tfc)
        }
    }

    useEffect(()=>{
        classNameHandler();
    },[props.alertType,focus])
    return (
        <div>
            {/* title */}
            <label className={titleClassName} style={{userSelect : 'none'}} htmlFor={props.inputElementProps?.id}>{props.title}</label>
            <div style={{position : "relative", zIndex : 1}}>

                {/* wrapper */}
                <div style={{display : 'flex'}} className={wrapperClassName}>

                    {/* children input */}
                    {(props.inputChildrenPosition === 'left' || props.inputChildrenPosition === 'both') && props.inputChildren }

                    <div style={{position : 'relative', width : '100%'}}>
                        <input style={{backgroundColor : "transparent", outline : "none", width : "100%" }} {...props.inputElementProps}  className={inputClassName.current} placeholder=" " onFocus={focusHandler} onBlur={blurHandler}/>

                        {/* placeholder */}
                        <label className={placeholderClassName} style={{top : 0, left : 0, zIndex : 10,userSelect : 'none', position : 'absolute', pointerEvents : 'none'}} htmlFor={props.inputElementProps?.id}>{props.inputElementProps?.placeholder}</label>
                    </div>

                    {/* children input */}
                    {(props.inputChildrenPosition === 'right' || props.inputChildrenPosition === 'both') && props.inputChildren }
                </div>

                {/* disabled */}
                {props.inputElementProps?.disabled && <div style={{ position : 'absolute', top : 0, left : 0, zIndex : 1 }} className={disabledClassName.current}></div>}
            </div>

            {/* alert */}
            <span 
                style={{userSelect : 'none'}}
                className={alertClassName}>
                    {props.alertMessage}
            </span>
        </div>
    )
}

export default Input