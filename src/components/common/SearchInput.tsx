interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchInput = ({
  value,
  onChange,
  placeholder = " Search...",
}: SearchInputProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full md:w-64 px-3 py-2 border rounded focus:outline-none focus:ring"
    />
  );
};

export default SearchInput;
