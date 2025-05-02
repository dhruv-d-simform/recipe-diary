import HomePage from '@/pages/HomePage.tsx';
import Header from '@/components/Header.tsx';

function App() {
    return (
        <div>
            <Header />
            <div className="w-full max-w-[100rem] m-auto pt-16">
                <HomePage />
            </div>
        </div>
    );
}

export default App;
