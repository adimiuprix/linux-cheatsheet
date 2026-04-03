import { links } from "@/constants/links";

export function FooterCTA() {
  return (
    <section className="py-20 px-4 bg-linear-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-(--spacing-fd-container) mx-auto text-center">
        <h2 className="text-3xl font-medium mb-4">
          Ready to master the Linux terminal?
        </h2>
        <p className="text-blue-100 mb-8 max-w-lg mx-auto">
          Explore our comprehensive collection of commands and starts managing your servers like a pro.
        </p>
      </div>
    </section>
  );
}
