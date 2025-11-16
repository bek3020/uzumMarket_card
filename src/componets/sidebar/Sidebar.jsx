import React, { useState } from "react";

const categories = [
  "Бытовая техника",
  "Климатическая техника",
  "Крупная бытовая техника",
  "Аксессуары и запчасти",
  "Техника для кухни",
];

const colors = [
  { name: "Коричневый", color: "#6f3e18" },
  { name: "Красный", color: "#bd1e1e" },
  { name: "Зеленый", color: "#2e7d32" },
  { name: "Хаки", color: "#6b6b2e" },
  { name: "Фиолетовый", color: "#7b1fa2" },
  { name: "Розовый", color: "#e91e63" },
];

const brands = ["beemade", "DEME", "DEMARK", "Ecomagnet", "Homik", "Jaskpro"];

const countries = [
  "Австралия",
  "Англия",
  "Беларусь",
  "Босния и Герцеговина",
  "Венгрия",
  "Вьетнам",
];

const Sidebar = () => {
  const [price, setPrice] = useState([5000, 56000000]);

  return (
    <div className="w-full p-4 border rounded-lg bg-white shadow-sm text-sm">
      {/* Категории */}
      <div>
        <h2 className="font-semibold mb-2">Категории</h2>

        <label className="flex items-center gap-2">
          <input type="checkbox" defaultChecked />
          <span>Все категории</span>
        </label>

        <div className="space-y-1 mt-1">
          {categories.map((ct) => (
            <label key={ct} className="flex items-center gap-2 pl-3">
              <input type="checkbox" />
              <span>{ct}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="my-4 border-b" />

      {/* Цена */}
      <div>
        <h2 className="font-semibold mb-2">Цена, сум</h2>

        <div className="flex items-center gap-2">
          <input
            type="number"
            value={price[0]}
            onChange={(e) => setPrice([+e.target.value, price[1]])}
            className="w-1/2 border p-1 rounded text-sm"
          />

          <input
            type="number"
            value={price[1]}
            onChange={(e) => setPrice([price[0], +e.target.value])}
            className="w-1/2 border p-1 rounded text-sm"
          />
        </div>

        <input
          type="range"
          min={5000}
          max={56000000}
          value={price[0]}
          onChange={(e) => setPrice([+e.target.value, price[1]])}
          className="w-full mt-3"
        />
      </div>

      <div className="my-4 border-b" />

      {/* Цвет */}
      <div>
        <h2 className="font-semibold mb-2">Цвет</h2>

        <div className="space-y-2">
          {colors.map((c) => (
            <label
              key={c.name}
              className="flex items-center gap-2 cursor-pointer"
            >
              <span
                className="block w-4 h-4 rounded-full border"
                style={{ backgroundColor: c.color }}
              ></span>
              <input type="checkbox" />
              {c.name}
            </label>
          ))}
        </div>

        <button className="text-violet-600 mt-1 text-xs">Еще 16</button>
      </div>

      <div className="my-4 border-b" />

      {/* Бренд */}
      <div>
        <h2 className="font-semibold mb-2">Бренд</h2>

        <div className="space-y-1 max-h-40 overflow-hidden">
          {brands.map((b) => (
            <label key={b} className="flex items-center gap-2">
              <input type="checkbox" />
              {b}
            </label>
          ))}
        </div>

        <button className="text-violet-600 mt-1 text-xs">Еще 456</button>
      </div>

      <div className="my-4 border-b" />

      {/* Страна */}
      <div>
        <h2 className="font-semibold mb-2">Страна производства</h2>

        <div className="space-y-1 max-h-40 overflow-hidden">
          {countries.map((c) => (
            <label key={c} className="flex items-center gap-2">
              <input type="checkbox" />
              {c}
            </label>
          ))}
        </div>

        <button className="text-violet-600 mt-1 text-xs">Еще 39</button>
      </div>
    </div>
  );
};

export default Sidebar;
