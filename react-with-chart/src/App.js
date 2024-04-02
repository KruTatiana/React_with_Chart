import { Chart } from "react-google-charts";

const data = [
  ["Language", "Percentage of developers"],
  ["Java Script", 19.1],
  ["Java", 14],
  ["Python", 13.4],
  ["C#", 13.3],
  ["Type Script", 13.3],
  ["PHP", 7.1],
  ["Kotlin", 3.2],
  ["C++", 2.8],
  ["DB", 2.7],
  ["Swift", 2.5],
  ["Go", 1.9],
  ["Ruby", 1.8],
  ["Dart", 1.1],
  ["Other", 3.4]
];

const options = {
  title: "Рейтинг языков программирования 2023",
  is3D: true,
};

function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width="100%"
      height="700px"
    />
  );
}

export default App;
