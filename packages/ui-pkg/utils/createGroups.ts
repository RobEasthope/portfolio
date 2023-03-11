import { ProjectProps } from "ui-pkg/pages/Project/Project";

type CreateGroupsProps = {
  arr: ProjectProps[];
  numGroups: number;
};

export function createGroups(props: CreateGroupsProps): [ProjectProps[]] {
  const { arr, numGroups } = props;
  const perGroup = Math.ceil(arr.length / numGroups);

  return new Array(numGroups)
    .fill("")
    .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup)) as [ProjectProps[]];
}
