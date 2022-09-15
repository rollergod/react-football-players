import React from "react";

export const CategoryContext = React.createContext();


export const CategoryProvider = ({ children }) => {
    console.log({ children });
    const [categoryValue, setCategoryValue] = React.useState('FL1');

    return <CategoryContext.Provider value={{ categoryValue, setCategoryValue }}>
        {children}
    </CategoryContext.Provider>
}