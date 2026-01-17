import React, { ReactElement } from "react"

export default function TypographyH1(props: { children: ReactElement<Props>}) {
  return (
    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
      {props.children}
    </h1>
  )
}
