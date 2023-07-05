import { Box } from '~/components/_base/Box/Box';
import { Type } from '~/components/_base/Type/Type';

import type { GigProps } from '~/components/about/GigIndex/components/Gig/Gig';

export type GigDateProps = {
  startDate: GigProps['startDate'];
  endDate: GigProps['endDate'] | Date;
};

export const GigDate = ({ startDate, endDate = new Date() }: GigDateProps) => {
  const parsedStartDate = new Date(startDate);
  const parsedEndDate = new Date(endDate);

  const startDateFull = parsedStartDate.toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  });
  const startMonth = parsedStartDate.toLocaleString('default', {
    month: 'long',
  });
  const startYear = parsedStartDate.getFullYear();

  const endDateFull = parsedEndDate.toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  });
  const endMonth = parsedEndDate.toLocaleString('default', {
    month: 'long',
  });
  const endYear = parsedEndDate.getFullYear();

  return (
    <Box as="div" className="flex flex-wrap italic">
      <Type as="p">
        {startMonth} {startYear !== endYear && startYear}
      </Type>
      {startDateFull !== endDateFull ? (
        <Type as="span">&nbsp;&ndash;&nbsp;</Type>
      ) : (
        <>&nbsp;</>
      )}

      <Type as="p">
        {startDateFull !== endDateFull && endMonth} {endYear}
      </Type>
    </Box>
  );
};
