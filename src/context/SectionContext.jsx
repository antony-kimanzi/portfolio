import { createContext, useState } from "react";
import propTypes from 'prop-types';

const SectionContext = createContext();

export const SectionProvider = ({children}) => {
    const [activeSection, setActiveSection] = useState('');

    return (
        <SectionContext.Provider value = {{activeSection, setActiveSection}}>
            {children}
        </SectionContext.Provider>
    );
};

SectionProvider.propTypes = {
    children: propTypes.node.isRequired,
};

export default SectionContext;