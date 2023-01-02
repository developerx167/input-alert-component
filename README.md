# Input Alert Component

```
import React,{useState} from 'react'
import {Input} from 'input-alert-component'

export default function Home() {
  const [value,setValue] = useState("");
  return (
    <main>
      <form className='form' onSubmit={(e)=>e.preventDefault()}>
        <Input
          title="This is a title"
          alertType={"default"}

          // support jsx as well
          alertMessage="**This is a message"

          // handle blur
          blurHandler={()=>{}}

          // handle focus
          focusHandler={()=>{}}

          // any prop in input element except onfocus onblur
          inputElementProps={{
            placeholder : 'username', 
            type : 'text',
            onChange : (e)=>{setValue(e.target.value)},
            value 
          }}

          inputChildren={(<></>)}
          inputChildrenPosition="left"

          // add style module
          // styleModule={"yourStyleModule"}

          // add className prefix and add this prefix in classes in css file
          // classNamePrefix="my-prefix"
        />
      </form>
    </main>
)
}


  
```


tailwind css :

```
/* ---------------------------------------------------- */
/* ----------------- base styles ---------------------- */
/* ---------------------------------------------------- */


/* remove background color on autofill ( more information : https://stackoverflow.com/a/29580847 )*/
.input-box:-webkit-autofill,
.input-box:-webkit-autofill:hover,
.input-box:-webkit-autofill:focus,
.input-box:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: rgba(107,114,128,1) !important;
}

/* input box */
.input-box{
    /* don't put padding in wrapper, instead put padding in here (input) */
    @apply p-4
}

/* input wrapper */
.input-wrapper {
    @apply rounded-lg border-2 transition-all text-gray-500 duration-300
}

/* input placeholder */
.input-placeholder{
    @apply px-1 ml-2 translate-y-[50%] transition-all duration-300 text-lg
}

/* input title */
.input-title{
    @apply text-gray-600 font-semibold text-lg block mb-3
}

/* input alert */
.input-alert{
    @apply block text-xs mt-2 select-none
}

/* input disabled */
.input-disabled{
    @apply h-full w-full rounded-lg bg-gray-400/60
}


/* ---------------------------------------------------- */
/* --------- styles for input focus off --------------- */
/* ---------------------------------------------------- */

/* input wrapper */
.input-wrapper-focus-off-error{
    @apply bg-red-100 border-red-200
}
.input-wrapper-focus-off-default{
    @apply bg-gray-200
}

/* input alert */
.alert-focus-off-error {
    @apply text-red-400
}
.alert-focus-off-default {
    @apply text-gray-400
}

/* input placeholder */
.placeholder-focus-off-error{
    @apply text-red-400
}
.placeholder-focus-off-default{
    @apply text-gray-600
}

/* title */
.title-focus-off-error{
    @apply text-red-400
}
.title-focus-off-default{
    @apply text-gray-600
}



/* ---------------------------------------------------- */
/* ---------- styles for input focus on --------------- */
/* ---------------------------------------------------- */

/* input wrapper */
.input-wrapper-focus-on-error{
    @apply bg-white border-red-200
}
.input-wrapper-focus-on-default{
    @apply bg-white
}

/* input alert */
.alert-focus-on-error {
    @apply text-red-400
}
.alert-focus-on-default {
    @apply text-gray-400
}

/* input placeholder */
.placeholder-focus-on-error{
    @apply text-red-400
}
.placeholder-focus-on-default{
    @apply text-gray-400
}
/* input placeholder up on focus or if placeholder not shown */
.input-box:focus + .input-placeholder{
    @apply -translate-y-[60%] bg-white text-sm
}
.input-box:not(:placeholder-shown) + .input-placeholder{
    @apply -translate-y-[60%] bg-white text-sm
}
/* if default change color */
.input-box:focus + .placeholder-focus-off-default{
    @apply -translate-y-[60%] bg-white text-sm text-gray-400
}
.input-box:not(:placeholder-shown) + .placeholder-focus-off-default{
    @apply -translate-y-[60%] bg-white text-sm text-gray-400
}

/* input title */
.title-focus-on-error{
    @apply text-red-400
}
.title-focus-on-default{
    @apply text-gray-600
}






/* ---------------------------------------------------- */
/* ---------- others (related with example) --------------- */
/* ---------------------------------------------------- */

/* form */
.form{
    @apply w-[30rem] m-auto p-4 py-10 bg-white shadow-2xl rounded-lg flex flex-col gap-y-5
}



```

styling input childrens :
```
/* style your input children (use the className you have given to input children)*/
.inputChildren{
    @apply flex items-center pl-2 text-white transition-all duration-300
}
.input-wrapper-focus-on-error > .inputChildren{
    @apply text-red-400
}
.input-wrapper-focus-on-default > .inputChildren{
    @apply text-gray-400
}

```