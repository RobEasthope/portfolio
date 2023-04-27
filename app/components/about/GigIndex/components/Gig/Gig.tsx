import { Box } from '~/components/base/Box/Box';
import { Prose } from '~/components/base/Prose/Prose';
import type { BasicTextProps } from '~/components/base/Prose/components/BasicText/BasicText';
import { BasicTextComponents } from '~/components/base/Prose/components/BasicText/BasicText';
import { Type } from '~/components/base/Type/Type';

import { GigDate } from '~/components/about/GigIndex/components/Gig/GigDate';
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
  endDate = 'present',
}: GigProps) => (
  <Box as="article">
    <Type as="h4" className="font-bold">
      {client?.name} / {jobTitle}
    </Type>

    <GigDate startDate={startDate} endDate={endDate} />

    <Prose as="div" content={description} components={BasicTextComponents} />
  </Box>
);
