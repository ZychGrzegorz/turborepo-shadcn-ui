import Link from 'next/link'; // Import Link for navigation
import SimpleModal from "@repo/ui/components/simple-modal";
import { Button } from "@repo/ui/components/ui/button";

export default function Page() {
  return (
    <main>
      <Button>Click me</Button>
      <SimpleModal />
      <span>
        main page
      </span>
      <nav>
        <ul>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </main>
  );
}
