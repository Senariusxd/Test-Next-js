import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "About",
};

export default function RootLayout({ children }) {
	return (
        <main className={inter.className}>
            <div></div>
            {children}
        </main>	
	);
}
