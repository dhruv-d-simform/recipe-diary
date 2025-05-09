import { Header } from '@/components/Header.tsx';
import { Outlet } from 'react-router';

export function App() {
    return (
        <div>
            <Header />
            <div className="w-full max-w-[100rem] m-auto pt-16">
                <Outlet />
            </div>
        </div>
    );
}
