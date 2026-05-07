import React from "react";

const CONTINENTS = ["Africa", "Asia", "Europe", "Americas", "Oceania"];
const ACTIVITIES = ["Hiking", "Beach", "Safari", "Cultural", "Adventure"];
const DURATIONS = ["1–7 days", "8–14 days", "15–21 days", "22+ days"];

const CheckboxGroup = ({ title, options, selected, onChange }) => (
  <div className="mb-6">
    <h3 className="text-[#e8d5b7] font-medium text-xs uppercase tracking-widest mb-3">
      {title}
    </h3>
    <div className="space-y-2">
      {options.map((opt) => (
        <label
          key={opt}
          className="flex items-center gap-2 cursor-pointer group min-h-[44px]"
        >
          <input
            type="checkbox"
            checked={selected.includes(opt)}
            onChange={() => onChange(opt)}
            className="w-4 h-4 accent-[#c96442] cursor-pointer"
          />
          <span className="text-[#9bb0c5] text-sm group-hover:text-[#e8d5b7] transition-colors">
            {opt}
          </span>
        </label>
      ))}
    </div>
  </div>
);

const FilterSidebar = ({ filters, onFilterChange, onReset }) => {
  const toggle = (key, value) => {
    const current = filters[key] || [];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onFilterChange(key, updated);
  };

  return (
    <aside className="bg-[#1a2e45] rounded-xl p-6 sticky top-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#f5edd8]">
          Filter Tours
        </h2>
        <button
          onClick={onReset}
          className="text-[#c96442] text-xs hover:underline"
        >
          Clear all
        </button>
      </div>

      {/* Price slider */}
      <div className="mb-6">
        <h3 className="text-[#e8d5b7] font-medium text-xs uppercase tracking-widest mb-3">
          Price Range
        </h3>
        <input
          type="range"
          min="0"
          max="10000"
          step="100"
          value={filters.maxPrice || 10000}
          onChange={(e) => onFilterChange("maxPrice", Number(e.target.value))}
          className="w-full accent-[#c96442]"
        />
        <p className="text-[#9bb0c5] text-xs mt-2">
          Up to ${(filters.maxPrice || 10000).toLocaleString()}
        </p>
      </div>

      <CheckboxGroup
        title="Continent"
        options={CONTINENTS}
        selected={filters.continents || []}
        onChange={(v) => toggle("continents", v)}
      />
      <CheckboxGroup
        title="Duration"
        options={DURATIONS}
        selected={filters.durations || []}
        onChange={(v) => toggle("durations", v)}
      />
      <CheckboxGroup
        title="Activity"
        options={ACTIVITIES}
        selected={filters.activities || []}
        onChange={(v) => toggle("activities", v)}
      />
    </aside>
  );
};

export default FilterSidebar;
