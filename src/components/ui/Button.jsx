import React from 'react'


export function Button({ children, className = '', ...props }) {
return (
<button
{...props}
className={`px-6 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition ${className}`}
>
{children}
</button>
)
}