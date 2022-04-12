import { GlobalMetadata, Settings } from '~/UI/types/sanity-schema';
import { HeaderProps } from '~/UI/navigation/Header/Header';
import { FooterProps } from '~/UI/navigation/Footer/Footer';

export interface SettingsProps extends Settings {
  homePageSlug: string;
}

export type AppGlobalsProps = {
  header: HeaderProps;
  footer: FooterProps;
  metadata: GlobalMetadata;
  settings: SettingsProps;
};
