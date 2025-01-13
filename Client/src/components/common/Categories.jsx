import React from "react";

const categories = [
  {
    title: "General Aptitude",
    items: [
      "Arithmetic Aptitude",
      "Data Interpretation",
      "Online Aptitude Test",
      "Data Interpretation Test",
    ],
    icon: "🌀", // Placeholder icon
  },
  {
    title: "Verbal and Reasoning",
    items: [
      "Verbal Ability",
      "Logical Reasoning",
      "Verbal Reasoning",
      "Non Verbal Reasoning",
    ],
    icon: "✔️", // Placeholder icon
  },
  {
    title: "Current Affairs & GK",
    items: [
      "Current Affairs",
      "Basic General Knowledge",
      "General Science",
      "Read more...",
    ],
    icon: "🗓️", // Placeholder icon
  },
  {
    title: "Interview",
    items: ["Placement Papers", "Group Discussion", "HR Interview", "Read more..."],
    icon: "👥", // Placeholder icon
  },
  {
    title: "Engineering",
    items: [
      "Mechanical Engineering",
      "Civil Engineering",
      "ECE, EEE, CSE",
      "Chemical Engineering",
    ],
    icon: "⚙️", // Placeholder icon
  },
  {
    title: "Programming",
    items: ["C Programming", "C++ Programming", "C# Programming", "Java Programming"],
    icon: "💻", // Placeholder icon
  },
];

const CategoryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="card shadow-lg border border-gray-200 p-4 rounded-lg hover:shadow-xl transition duration-300"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-[#d90368] font-rale">{category.title}</h2>
            <div className="text-gray-300 text-4xl">{category.icon}</div>
          </div>
          <ul className="space-y-2">
            {category.items.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-green-500 cursor-pointer font-rale">
                &gt; {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CategoryCards;
