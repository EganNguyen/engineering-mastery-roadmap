"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollHandler() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // If there is no hash in the URL, scroll to top
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    } else {
      // If there is a hash, wait a bit for the content to render then scroll to it
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, searchParams]);

  return null;
}
