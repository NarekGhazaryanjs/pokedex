export type SearchbarProps = {
  options: string[];
  maxLength: number;
  className?: string;
  placeholder: string;
  setSearchValue: (value: string) => void;
};
