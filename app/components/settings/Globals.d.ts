import { GlobalMetadata, Settings } from '~/components/types/sanity-schema';
import { HeaderProps } from '~/components/navigation/Header/Header';
import { FooterProps } from '~/components/navigation/Footer/Footer';

export interface SettingsProps extends Settings {
  homePageSlug: string;
}

export type AppGlobalsProps = {
  header: HeaderProps;
  footer: FooterProps;
  metadata: GlobalMetadata;
  settings: SettingsProps;
};
