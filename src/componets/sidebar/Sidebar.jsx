import React from "react";

const Sidebar = ({ filter, setFilter }) => {
  const categories = [
    "Telefonlar",
    "Planshetlar",
    "Noutbuklar",
    "Aksessuarlar",
  ];
  const colors = ["Qora", "Oq", "Qizil", "Ko‘k"];
  const brands = ["Apple", "Samsung", "Xiaomi", "Huawei"];
  const countries = ["Xitoy", "AQSh", "Koreya", "Rossiya"];

  const handleCheckboxChange = (type, value) => {
    let newValues = [...filter[type]];
    if (newValues.includes(value)) {
      newValues = newValues.filter((v) => v !== value);
    } else {
      newValues.push(value);
    }
    setFilter({ ...filter, [type]: newValues });
  };

  const handleAllCategoriesChange = () => {
    if (filter.categories.length === categories.length) {
      setFilter({ ...filter, categories: [] });
    } else {
      setFilter({ ...filter, categories: [...categories] });
    }
  };

  return (
    <div className="p-4 border rounded bg-white shadow-sm text-sm space-y-6">
      <h3 className="font-semibold text-lg mb-3">Filtrlar</h3>

      <div>
        <h4 className="font-medium mb-2">Kategoriyalar</h4>
        <div className="flex flex-col space-y-1">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={filter.categories.length === categories.length}
              onChange={handleAllCategoriesChange}
              className="form-checkbox"
            />
            <span className="ml-2 font-semibold">Hammasi</span>
          </label>
          {categories.map((category) => (
            <label
              key={category}
              className="inline-flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filter.categories.includes(category)}
                onChange={() => handleCheckboxChange("categories", category)}
                className="form-checkbox"
              />
              <span className="ml-2">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-2">Ranglar</h4>
        <div className="flex flex-col space-y-1">
          {colors.map((color) => (
            <label
              key={color}
              className="inline-flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filter.colors.includes(color)}
                onChange={() => handleCheckboxChange("colors", color)}
                className="form-checkbox"
              />
              <span className="ml-2">{color}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-2">Brendlar</h4>
        <div className="flex flex-col space-y-1">
          {brands.map((brand) => (
            <label
              key={brand}
              className="inline-flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filter.brands.includes(brand)}
                onChange={() => handleCheckboxChange("brands", brand)}
                className="form-checkbox"
              />
              <span className="ml-2">{brand}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-medium mb-2">Mamlakatlar</h4>
        <div className="flex flex-col space-y-1">
          {countries.map((country) => (
            <label
              key={country}
              className="inline-flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filter.countries.includes(country)}
                onChange={() => handleCheckboxChange("countries", country)}
                className="form-checkbox"
              />
              <span className="ml-2">{country}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
