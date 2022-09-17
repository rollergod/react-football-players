import React from "react";

export const CategoryContext = React.createContext();


export const CategoryProvider = ({ children }) => {
    const [categoryValue, setCategoryValue] = React.useState('');

    return <CategoryContext.Provider value={{ categoryValue, setCategoryValue }}>
        {children}
    </CategoryContext.Provider>
}