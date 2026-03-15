interface HeaderProps {
  title: string;
  subtitle?: string;
}

function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="bg-red-600 text-white py-6 shadow-lg">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {/* Só renderiza o subtítulo se ele existir */}
        {subtitle && <p className="text-red-200 mt-1 text-sm">{subtitle}</p>}
      </div>
    </header>
  );
}

export default Header;
