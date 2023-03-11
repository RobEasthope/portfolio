import { GlobalMetadata, Settings } from 'ui-pkg/types/sanity-schema';
import { HeaderProps } from 'ui-pkg/navigation/Header/Header';
import { FooterProps } from 'ui-pkg/navigation/Footer/Footer';

export interface SettingsProps extends Settings {
  homePageSlug: string;
}

export type AppGlobalsProps = {
  header: HeaderProps;
  footer: FooterProps;
  metadata: GlobalMetadata;
  settings: SettingsProps;
};
