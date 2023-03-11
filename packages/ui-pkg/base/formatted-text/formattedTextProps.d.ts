import { PageProps } from 'layouts/Page/Page';
import { ReactNode } from 'react';

export type SerializerMarksProps = {
  mark: { url: string; page: PageProps };
  children: ReactNode;
};

export type BlockRendererProps = {
  node: { style: string };
  children: ReactNode;
};
