"use client"
import Link from 'next/link'; // Import Link for navigation
import SimpleModal from "@repo/ui/components/simple-modal";
import { Button } from "@repo/ui/components/ui/button";
import { api } from '~/utils/trpc';

export default function Page() {
  const { data } = api.hello.useQuery({ name: 'tRPC' })

  console.log(data)
  return (
    <main>
      <Button>Click me</Button>
      <SimpleModal />
      <span>
        main page
      </span>
      <nav>
        <ul>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </main>
  );
}
