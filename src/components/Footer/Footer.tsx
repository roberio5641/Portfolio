import { useTheme } from "../../context/ThemeContext";

export function Fotter() {
    const {theme} = useTheme();
    return (
        <footer
            className={`text-center font-bold mt-24 p-5 shadow-lg shadow-slate-300 font-poppins } ${
                theme === 'dark' ? 'shadow-slate-300' : 'shadow-green-700'
              }`}
        >
            <p className="text-sm sm:text-base">
              Desenvolvido com ❤️ por José Robério
            </p>
        </footer>
    )
}