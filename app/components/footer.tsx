import { ModeToggle } from "./mode-toggle";

export default function Footer() {
  return (
    <footer className="border sticky top-full">
      <div className="container h-16 gap-1 flex items-center">
        <p className="text-muted-foreground">&copy; TsutomuT</p>
        <span className="flex-1"></span>
        <ModeToggle />
      </div>
    </footer>
  );
}
