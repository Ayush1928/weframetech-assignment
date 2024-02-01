import * as React from 'react';

interface IlayoutProps {
    children: React.ReactNode
}

const layout: React.FunctionComponent<IlayoutProps> = ({ children }) => {
    return (
        <>
            {children}
        </>
    );
};

export default layout;
