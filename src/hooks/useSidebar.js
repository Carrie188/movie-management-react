import React, { useState, useEffect, useContext, createContext } from 'react';

export const SidebarContext = createContext();



export function SidebarProvider({ children, defaultItem }) {
    const [currentItem, setCurrentItem] = useState(defaultItem);

    // fire useEffect() whenever either currentItem or defaultItem changes
    useEffect(() => {
        if (defaultItem !== currentItem) {
            return setCurrentItem(defaultItem);
        }
    }, [currentItem, defaultItem]); 

    return (
        <SidebarContext.Provider value={{ currentItem, setCurrentItem }}>
            {children}
        </SidebarContext.Provider>
    );
}

export const useSidebar = ({ isCollapsible, item, items = [] } = {}) => {
    const { currentItem, setCurrentItem } = useContext(SidebarContext);
    const isActive = item === currentItem || items.includes(currentItem);
    const [isExpanded, setIsExpanded] = useState(isActive);

    useEffect(() => {
        if (!isActive && isExpanded) {
            return setIsExpanded(false);
        }
        if (isActive && !isExpanded) {
            return setIsExpanded(true);
        }
        // need to add cooments below if we don't add isActive,isExpanded as dependencies
        // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [currentItem,isActive,isExpanded]);         

    

    const onItemClick = () => {
        if (!isCollapsible) {
            setCurrentItem(item);
        }
        setIsExpanded((prev) => !prev);
    };

    return {
        isExpanded,
        isActive,
        onItemClick
    };
};
