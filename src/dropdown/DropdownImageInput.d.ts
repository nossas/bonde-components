/// <reference types="react" />
interface Img {
  src: string;
  alt?: string;
}
interface Value {
  img: Img;
  label: string;
}
interface DropdownImageInputProps {
  value: Value;
  placeholder: string;
  clickable?: boolean;
}
declare const DropdownImageInput: import('styled-components').StyledComponent<
  ({ className, value }: any) => JSX.Element,
  any,
  DropdownImageInputProps,
  never
>;
export default DropdownImageInput;
