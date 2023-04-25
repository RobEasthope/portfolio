import { Box } from '~/components/base/Box/Box';
import { Prose } from '~/components/base/Prose/Prose';
import type { BasicTextProps } from '~/components/base/Prose/components/BasicText/BasicText';
import { BasicTextComponents } from '~/components/base/Prose/components/BasicText/BasicText';
import { Type } from '~/components/base/Type/Type';

import type { OrganisationProps } from '~/components/about/Organisation/Organisations';

export type GigProps = {
  _id?: string;
  client: OrganisationProps;
  jobTitle: string;
  description: BasicTextProps;
  startDate: string;
  endDate?: string;
};

export const Gig = ({
  client,
  jobTitle,
  description,
  startDate,
  endDate,
}: GigProps) => (
  <Box as="article">
    <Type as="h4">{client?.name}</Type>
    <Type as="h4">{jobTitle}</Type>
    <Type as="p">{startDate}</Type>
    <Type as="p">{endDate}</Type>
    <Prose as="div" content={description} components={BasicTextComponents} />
  </Box>
);
