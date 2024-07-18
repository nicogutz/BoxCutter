import DefaultFooter from "@/components/Footer";
import HomeNavbar from "@/components/HomeNavbar";
import AppComponent from "@/components/select/AppComponent";
import type { PageProps } from "@/utils/types";

export default function AppPage({ params }: PageProps) {
  const slug = params.slug;

  return (
    <>
      <HomeNavbar />
      <AppComponent slug={slug} />
      <DefaultFooter />
    </>
  );
}
