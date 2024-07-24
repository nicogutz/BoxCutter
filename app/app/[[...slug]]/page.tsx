import DefaultFooter from "@/components/Footer";
import HomeNavbar from "@/components/HomeNavbar";
import ClientWrapper from "@/components/select/ClientWrapper";
import type { PageProps } from "@/utils/types";

export default function AppPage({ params }: PageProps) {
  const slug = params.slug;

  return (
    <>
      <HomeNavbar />
      <ClientWrapper slug={slug} />
      <DefaultFooter />
    </>
  );
}
