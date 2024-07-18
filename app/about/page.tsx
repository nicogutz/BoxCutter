import DefaultFooter from "@/components/Footer";
import HomeNavbar from "@/components/HomeNavbar";

export default function HomePage() {
  return (
    <>
      <HomeNavbar />
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="max-w-screen-md">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Let's find more that brings us together.
            </h2>
            <p className="mb-8 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
              Flowbite helps you connect with friends, family and communities of
              people who share your interests. Connecting with your friends and
              family as well as discovering new ones is easy with features like
              Groups, Watch and Marketplace.
            </p>
          </div>
        </div>
      </section>
      <DefaultFooter />
    </>
  );
}
