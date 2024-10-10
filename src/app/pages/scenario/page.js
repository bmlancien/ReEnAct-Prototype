"use client";

import { useSearchParams } from 'next/navigation';

export default function ScenarioDetails() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  return (
    <div>
      {id === '1' && <div>Content for Item 1</div>}
      {id === '2' && <div>Content for Item 2</div>}
      {!id && <div>Select an item from the previous page.</div>}
    </div>
  );
}

// Wrapping the component in Suspense
export default function ScenarioPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContentPage />
    </Suspense>
  );
}