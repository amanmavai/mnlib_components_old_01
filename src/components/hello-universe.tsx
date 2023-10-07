export interface UniverseProps {
  name: string;
  size: string;
  expansion: number;
}
export function HelloUniverse(props: UniverseProps) {
  return <div className="tw-text-9xl tw-text-red-400">Hello Universe</div>;
}
