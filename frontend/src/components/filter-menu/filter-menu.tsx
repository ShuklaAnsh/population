import { useState } from "react";

export interface Filter<TFilter> {
  label: string;
  onOptionSelect: (value: TFilter) => void;
}

export interface FilterMenuProps {
  title: string;
  filters: Filter<number>[];
}

export const FilterMenu = (props: FilterMenuProps) => {
  const [filterVals, setFilterVals] = useState<string[]>(
    Array(props.filters.length).fill(undefined),
  );

  const filters = props.filters.map((filter, idx) => (
    <div className="flex flex-col space-y-4">
      <label className="space-x-2">
        <span>{filter.label}</span>
        <input
          className="outline outline-1 focus:outline-2 focus:outline-blue-400"
          type="text"
          name="population-filter"
          value={filterVals[idx]}
          onChange={(ev) =>
            setFilterVals((vals) => {
              const update = [...vals];
              update[idx] = ev.target.value;
              return update;
            })
          }
        />
      </label>
      <button
        className="bg-pd-amber w-fit rounded-md p-2 px-2 py-1 text-zinc-600 shadow-sm hover:bg-amber-500 hover:shadow-lg"
        onClick={() => filter.onOptionSelect(parseInt(filterVals[idx]))}
      >
        Apply
      </button>
    </div>
  ));

  return (
    <div className="flex flex-col space-y-4 rounded-lg p-2 outline outline-1">
      <h3>{props.title}</h3>
      {filters}
    </div>
  );
};
