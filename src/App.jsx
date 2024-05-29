import { CartProvider } from './MyApp/MyContextAPI'
import Web from './MyApp/Web'


const App = () => {
    return (
        <CartProvider>
            <Web />
        </CartProvider>
    )
}

export default App
