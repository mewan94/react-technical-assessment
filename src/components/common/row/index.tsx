import React, {ReactNode} from "react";

interface RowProps {
    children: ReactNode | ReactNode[],
    customClass?: string,
}

const Row = ({children, customClass=''} :RowProps) => {
    return(
        <div className={`flex w-full ${customClass}`}>
            {children}
        </div>
    )
}

export {Row}