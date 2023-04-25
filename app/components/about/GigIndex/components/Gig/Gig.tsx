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
  endDate = 'present',
}: GigProps) => {
  const parsedStartDate = new Date(startDate);
  const parsedEndDate = new Date(endDate);

  const startMonth = parsedStartDate.toLocaleString('default', {
    month: 'short',
  });
  const startYear = parsedStartDate.getFullYear();

  const endMonth = parsedEndDate.toLocaleString('default', {
    month: 'short',
  });
  const endYear = parsedEndDate.getFullYear();

  return (
    <Box as="article">
      <Box as="section" className="flex flex-row">
        <Type as="h4">{client?.name}</Type>
        <Type as="span" className="mx-0.25">
          /
        </Type>
        <Type as="h4">{jobTitle}</Type>
      </Box>
      <Box as="div" className="flex flex-wrap">
        <Type as="p">
          {startMonth} {startYear !== endYear ? startYear : ''}
        </Type>
        <Type as="span" className="mx-0.25">
          &ndash;
        </Type>
        <Type as="p">
          {endMonth} {endYear}
        </Type>
      </Box>

      <Prose as="div" content={description} components={BasicTextComponents} />
    </Box>
  );
};
