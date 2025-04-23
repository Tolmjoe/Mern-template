function ThemeTogg(){
    document.body.classList.toggle('dark');
    const darkTheme = document.body.classList.contains('dark');
    localStorage.setItem("theme", darkTheme ? "dark" : "light");
    return (
        <button className="toggleButton" onClick={ThemeTogg}>
            Change Theme
        </button>
    )
}

export default ThemeTogg;