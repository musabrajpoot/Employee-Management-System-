import { Menu, Power } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="z-10 flex h-14 shrink-0 items-center justify-between bg-[#50566a] px-4 text-white shadow-sm">
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Toggle sidebar"
        className="rounded p-1.5 text-white/90 transition-colors hover:bg-white/10"
      >
        <Menu className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Sign out"
        className="rounded p-1.5 text-white/90 transition-colors hover:bg-white/10"
      >
        <Power className="h-5 w-5" />
      </button>
    </header>
  );
}
