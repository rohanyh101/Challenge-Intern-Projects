import { ToastContainer } from 'react-toastify';
import './App.css';
import SignUpForm from './components/SignUpForm';

function App() {
    return (
        <>
            <ToastContainer />
            <div className="App">
                <SignUpForm />
            </div>
        </>
    );
}

export default App;
