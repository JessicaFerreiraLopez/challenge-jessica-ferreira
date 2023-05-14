export interface optionsSelectProps {
  value: string;
  labelText: string;
}

interface SelectProps {
  options: optionsSelectProps[];
  defaultOption?: string;
}

export default function Select({ options, defaultOption }: SelectProps) {
  return (
    <div>
      <select defaultValue={defaultOption}>
        {options.map((elem, key) => (
          <option key={key} value={elem.value}>
            {elem.labelText}
          </option>
        ))}
      </select>
    </div>
  );
}
