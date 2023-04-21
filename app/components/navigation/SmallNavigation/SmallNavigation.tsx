import * as Dialog from '@radix-ui/react-dialog';
import { useLocation } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

import { Box } from '~/components/base/Box/Box';
import { SuperLink } from '~/components/base/SuperLink/SuperLink';
import { Type } from '~/components/base/Type/Type';

import type { HeaderProps } from '~/components/navigation/Header/Header';
import { HeaderLogo } from '~/components/navigation/Header/components/HeaderLogo/HeaderLogo';

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
  const location = useLocation();
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

  // Ensures menu is closed when navigating
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const combindedNavigation = [...primaryNavigation, ...secondaryNavigation];

  return (
    <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
      <Dialog.Trigger className="sm:hidden p-0.25">
        <Type as="span" className="text-lg">
          <HiOutlineMenuAlt2 />
        </Type>
      </Dialog.Trigger>

      <Dialog.Overlay className="fixed left-0 top-0 z-10 h-screen w-screen bg-white opacity-70" />

      <Dialog.Content className="absolute right-0 top-0 z-50 h-screen w-full  overflow-y-scroll bg-white px-1">
        <Box
          as="div"
          className="flex w-full items-center justify-end py-0.5 sm:py-1"
        >
          <HeaderLogo logo={logo} />
          <Dialog.Close className="flex flex-nowrap items-center p-0.25">
            <Type as="span" className="text-lg">
              <IoMdClose />
            </Type>
          </Dialog.Close>
        </Box>

        <Box
          as="nav"
          className="flex justify-center items-center h-[calc(100vh_-_(2.5rem_*_1.5))] mx-auto max-w-xl"
        >
          <Box as="ul" className="flex flex-col gap-0.5">
            {combindedNavigation?.map((nav) => (
              <Type as="li" key={nav?._key} className="text-xl text-center">
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
