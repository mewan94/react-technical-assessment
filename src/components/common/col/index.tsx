import React, {ReactNode} from "react";

interface ColProps {
    children: ReactNode | ReactNode[],
    customClass?: string,
}

const Col = ({children, customClass=''} :ColProps) => {
    return(
        <div className={`flex flex-col ${customClass}`}>
            {children}
        </div>
    )
}

export {Col}