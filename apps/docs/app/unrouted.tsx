import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Unrouted() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/'); // Redirect to the main page
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [router]);

  return (
    <div>
      <h1>Page Not Found</h1>
      <p>You will be redirected to the main page shortly...</p>
    </div>
  );
}