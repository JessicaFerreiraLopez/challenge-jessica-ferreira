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
      <select
        defaultValue={defaultOption}
        className="items-center whitespace-nowrap rounded px-6 pb-2 pt-2 "
      >
        {options.map((elem, key) => (
          <option key={key} value={elem.value} className=" text-[#262626]">
            {elem.labelText}
          </option>
        ))}
      </select>
    </div>
  );
}
