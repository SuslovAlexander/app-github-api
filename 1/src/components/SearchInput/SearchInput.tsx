import styles from "./SearchInput.module.css";

interface ISearchInputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onFocus: () => void;
}

const SearchInput = ({
  placeholder = "",
  value,
  onChange,
  onFocus,  
}: ISearchInputProps): JSX.Element => {
  return (
    <>
      <input
        type="search"
        className={styles.search}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
      />
    </>
  );
};

export default SearchInput;
