import { TestProvider } from "./Teste"

const Providers = ({ children }) => {
    return (
        <TestProvider>
            { children }
        </TestProvider>
    )
}

export default Providers;