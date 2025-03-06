import { AboutMe } from "./components/AboutMe/AboutMe";
import { Header } from "./components/Header/Header";
import { ThemeProvider } from "./context/ThemeContext";
import { Fotter } from "./components/Footer/Footer";
export default function Home() {
  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <ThemeProvider>
      <Header scrollToSection={scrollToSection} />
      <AboutMe />
      <Fotter />
    </ThemeProvider>
  );
}