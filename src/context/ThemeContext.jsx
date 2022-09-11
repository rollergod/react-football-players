import React from "react";

export const ThemeContext = React.createContext({ themes: 'light', undefined });

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = React.useState('light');

    return <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
    </ThemeContext.Provider>
}