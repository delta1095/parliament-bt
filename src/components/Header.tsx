import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="w-full shadow-sm" style={{ backgroundColor: "#025e95" }}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <img src="/logo.png" alt="logo" style={{ height: "80px" }} />
        <nav className="flex items-center gap-4">
          <Navbar />
        </nav>
      </div>
    </header>
  );
};
