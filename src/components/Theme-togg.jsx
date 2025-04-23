function ThemeTogg() {
    const toggleTheme = () => {
        document.body.classList.toggle('dark');
        const darkTheme = document.body.classList.contains('dark');
        localStorage.setItem("theme", darkTheme ? "dark" : "light");
    };

    return (
        <button className="toggleButton" onClick={toggleTheme}>
            Change Theme
        </button>
    );
}

export default ThemeTogg;
