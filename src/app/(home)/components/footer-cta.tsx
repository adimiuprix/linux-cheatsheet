import Link from "next/link";
import { FaDiscord } from "react-icons/fa";

import { links } from "@/constants/links";

export function FooterCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-[var(--spacing-fd-container)] mx-auto text-center">
        <h2 className="text-3xl font-medium mb-4">
          Ingin cepat mengelola server?
        </h2>
        <p className="text-blue-100 mb-8 max-w-lg mx-auto">
          di sini tinggal nyontek.
        </p>
      </div>
    </section>
  );
}
