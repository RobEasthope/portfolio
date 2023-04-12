import { useRouter } from "next/router";
import { FooterProps } from "~/components/navigation/Footer/Footer";
import { HeaderProps } from "~/components/navigation/Header/Header";
import {
  Error404NavCard,
  Error404NavCardProps,
} from "~/components/pages/Error404/components/Error404NavCard/Error404NavCard";
import { Box } from "~/components/base/Box/Box";
import { TbParachute } from "react-icons/tb";
import {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from "sanity-codegen";
import { Button } from "~/components/base/Button/Button";
import { Type } from "~/components/base/Type/Type";
import { BasicLayout } from "~/components/layouts/BasicLayout/BasicLayout";

export type Error404Props = {
  page: {
    _type: "Error404";
    logo: {
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    };
    heading: string;
    subheading: string;
    cards: Error404NavCardProps[];
    goBackTitle: string;
  };
  header: HeaderProps;
  footer: FooterProps;
};

export const Error404 = ({ page, header, footer }: Error404Props) => {
  const router = useRouter();

  return (
    <BasicLayout header={header} footer={footer}>
      <Box as="div" className="bg-white">
        <Box as="main" className="mx-auto w-full max-w-7xl px-1 lg:px-3">
          <Box as="div" className="flex-shrink-0 pt-1">
            <TbParachute className="mx-auto h-2 w-auto" />
          </Box>
          <Box as="div" className="mx-auto max-w-xl py-2">
            <Box as="div" className="text-center">
              <Type as="p" className="text-lg font-semibold">
                404
              </Type>
              <Type as="h1" className="mb-1 text-3xl font-bold tracking-tight">
                {page?.heading}
              </Type>
              <Type as="p" className="mb-1 text-lg">
                {page?.subheading}
              </Type>
            </Box>
            <Box as="div">
              <Box
                as="ul"
                className="mt-2 divide-y divide-gray-200 border-b border-t border-gray-200"
              >
                {page?.cards?.map((card, i) => (
                  <Error404NavCard
                    heading={card.heading}
                    description={card.description}
                    link={card.link}
                    key={i}
                  />
                ))}
              </Box>
              {page?.goBackTitle && (
                <Box as="div" className="mt-2">
                  <Button
                    type="button"
                    onClick={() => router.back()}
                    className="text-base"
                  >
                    <span aria-hidden="true">&larr; </span>
                    {page?.goBackTitle}
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </BasicLayout>
  );
};
