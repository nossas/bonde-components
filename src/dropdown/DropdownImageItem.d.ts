/// <reference types="react" />
interface Img {
  src: string;
  alt?: string;
}
interface Value {
  img: Img;
  label: string;
}
interface DropdownImageItemProps {
  value: Value;
  placeholder: string;
  clickable?: boolean;
}
declare const DropdownImageItem: import('styled-components').StyledComponent<
  ({ className, value }: any) => JSX.Element,
  any,
  DropdownImageItemProps,
  never
>;
export default DropdownImageItem;
