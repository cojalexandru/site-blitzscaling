import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./views.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Quiz from "../components/Quiz";
import { Pie } from "react-chartjs-2";

const PieChart = (props) => {
  const { quiz_type } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://188.214.88.131:3000/api/get_scores?quiz_type=${quiz_type}`
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div className="data-loading">Scorurile se încarcă...</div>;
  }

  const chartData = {
    labels: data.map((score) => score.label),
    datasets: [
      {
        data: data.map((score) => score.value),
        backgroundColor: data.map((score) => score.color),
        hoverBackgroundColor: data.map((score) => score.color),
      },
    ],
  };
  console.log(data);

  return <Pie data={chartData} />;
};

function Game() {
  return (
    <div>
      <Helmet>
        <title>Blitzscaling - Jocuri</title>
      </Helmet>
      <Header />
      <div className="quizzes-container">
        <Quiz type="TrueFalse" />
        <Quiz />
      </div>
      <div className="chart-container">
        <div>
          <h1>Scoruri - Chestionarul 1</h1>
          <PieChart quiz_type="questions" />
        </div>
        <div>
          <h1>Scoruri - Chestionarul 2</h1>
          <PieChart quiz_type="true_false" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Game;
