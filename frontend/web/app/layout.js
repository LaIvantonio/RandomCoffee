import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'block',
    fallback: ['system-ui', 'sans-serif'],
});

export const metadata = {
    title: 'Оджетто | Random Coffee ☕',
    description: `Сервис для нетворкинга и общения сотрудников вне рабочих задач. 
    Сервис рандомно делит коллег на пары и предлагает онлайн или офлайн (если сотрудник удаленный) 
    встретиться и поболтать за чашечкой кофе.`,
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body className={montserrat.className}>{children}</body>
        </html>
    );
}
