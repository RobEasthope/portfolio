import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';

import { METADATA_HARD_CODED_FALLBACKS } from '~/constants/METADATA_HARD_CODED_FALLBACKS';

import { Box } from '~/components/base/Box/Box';
import { InternalLink } from '~/components/base/InternalLink/InternalLink';
import { SanityImage } from '~/components/base/SanityImage/SanityImage';
import { SuperLink } from '~/components/base/SuperLink/SuperLink';
import { Type } from '~/components/base/Type/Type';

import type { HeaderProps } from '~/components/navigation/Header/Header';
import { HeaderLogo } from '~/components/navigation/Header/components/HeaderLogo/HeaderLogo';

import { HOME_PAGE_SLUG } from '~/components/pages/Page/constants/HOME_PAGE_SLUG';

// TYPES
export type SmallNavigationProps = Pick<
  HeaderProps,
  'logo' | 'primaryNavigation' | 'secondaryNavigation'
>;

// MARKUP
export const SmallNavigation = ({
  logo,
  primaryNavigation,
  secondaryNavigation,
}: SmallNavigationProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Ensures menu is closed when resizing to desktop
  useEffect(() => {
    function handleCloseOnResize() {
      const isDesktop = window.matchMedia('(min-width: 480px)').matches;
      if (isDesktop && menuOpen) {
        setMenuOpen(false);
      }
    }

    window.addEventListener('resize', handleCloseOnResize);
    window.addEventListener('orientationchange', handleCloseOnResize);

    return () => {
      window.removeEventListener('resize', handleCloseOnResize);
      window.removeEventListener('orientationchange', handleCloseOnResize);
    };
  }, [menuOpen]);

  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     setMenuOpen(false);
  //   };

  //   router.events.on('routeChangeStart', handleRouteChange);

  //   // If the component is unmounted, unsubscribe
  //   // from the event with the `off` method:
  //   return () => {
  //     router.events.off('routeChangeStart', handleRouteChange);
  //   };
  // }, [setMenuOpen, router.events]);

  return (
    <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
      <Dialog.Trigger className="sm:hidden">
        <Type as="span" className="text-base">
          Menu
        </Type>
      </Dialog.Trigger>

      <Dialog.Overlay className="fixed left-0 top-0 z-10 h-screen w-screen bg-white opacity-70" />

      <Dialog.Content className="absolute right-0 top-0 z-50 h-screen w-full  overflow-y-scroll bg-white px-1 py-0.5">
        <Box as="div" className="flex w-full items-center justify-end">
          <HeaderLogo logo={logo} />
          <Dialog.Close className="flex flex-nowrap items-center">
            <Type as="span" className="text-base">
              Close
            </Type>
          </Dialog.Close>
        </Box>

        <Box as="nav" className="mx-auto mt-2 max-w-xl">
          <Box as="ul">
            {primaryNavigation?.map((nav) => (
              <Type as="li" key={nav?._key} className="text-4xl font-bold">
                <SuperLink
                  link={nav}
                  className="decoration-4 underline-offset-4 hover:underline"
                >
                  {nav.title}
                </SuperLink>
              </Type>
            ))}
          </Box>
          {secondaryNavigation && (
            <hr className="mb-0.75 mt-0.75 block h-0.25 w-2 bg-black" />
          )}
          <Box as="ul">
            {secondaryNavigation?.map((nav) => (
              <Type as="li" key={nav?._key} className="text-4xl font-bold">
                <SuperLink
                  link={nav}
                  className="decoration-4 underline-offset-4 hover:underline"
                >
                  {nav.title}
                </SuperLink>
              </Type>
            ))}
          </Box>
        </Box>
      </Dialog.Content>
    </Dialog.Root>
  );
};
