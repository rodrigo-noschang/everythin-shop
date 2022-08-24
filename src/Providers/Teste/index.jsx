import { useState, createContext, useContext } from "react"

const TestContext = createContext();

export const TestProvider = ({ children }) => {
    const [sentence, setSentence] = useState('abc');

    return (
        <TestContext.Provider value = {{ sentence, setSentence }}>
            { children }
        </TestContext.Provider>
    )
}

export const useTest = () => useContext(TestContext);

/**
 * To use:
 * import { useTest } from '../../Providers/Teste';
 * 
 * const test = useTest();
 * console.log(test.sentence);
 */