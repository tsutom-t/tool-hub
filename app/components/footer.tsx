import { ModeToggle } from "./mode-toggle";

export default function Footer() {
  return (
    <footer className="border sticky top-full">
      <div className="container flex items-center justify-between">
        <p className="text-muted-foreground">&copy; TsutomuT</p>
        <ModeToggle />
      </div>
    </footer>
  );
}
