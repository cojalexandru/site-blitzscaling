import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./views.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Line } from "react-chartjs-2";
import parse from "html-react-parser";
import "chart.js/auto";

function LiveStockPrice({ symbol }) {
  const [stockPrice, setStockPrice] = useState(null);
  const [priceChange, setPriceChange] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=94ZVBMG7SGZARSN0`
        );

        if (response.ok) {
          const data = await response.json();
          const price = parseFloat(data["Global Quote"]["05. price"]);
          setStockPrice(price);
          const change = parseFloat(data["Global Quote"]["09. change"]);
          setPriceChange(change);
        } else {
          console.error("Error fetching stock price:", response.status);
        }
      } catch (error) {
        console.error("Error fetching stock price:", error);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 15000);

    return () => clearInterval(intervalId);
  }, [symbol]);

  const renderArrow = () => {
    if (priceChange > 0) {
      return <span className="arrow-up"></span>;
    } else if (priceChange < 0) {
      return <span className="arrow-down"></span>;
    } else {
      return <span className="arrow-neutral"></span>;
    }
  };

  return (
    <div className="live-stock-price-container">
      <h2>Prețul actual al acțiunilor</h2>
      {stockPrice ? (
        <div className="price-info">
          <div className="price">
            {renderArrow()}
            <p>
              {symbol} - ${stockPrice.toFixed(2)}
            </p>
          </div>
          {priceChange !== null && (
            <p className="price-change">
              {priceChange > 0 ? "+" : ""}
              {priceChange.toFixed(2)}
            </p>
          )}
        </div>
      ) : (
        <p>Loading stock price...</p>
      )}
    </div>
  );
}
function StockChart({ symbol }) {
  const [stockData, setStockData] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const start = new Date();
    start.setFullYear(today.getFullYear() - 5);

    const formattedStartDate = start.toISOString().split("T")[0];
    const formattedEndDate = today.toISOString().split("T")[0];

    setStartDate(formattedStartDate);
    setEndDate(formattedEndDate);

    fetchStockData(formattedStartDate, formattedEndDate);
  }, []);

  const fetchStockData = async (startDate, endDate) => {
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=full&apikey=94ZVBMG7SGZARSN0`
      );

      if (response.ok) {
        const data = await response.json();
        const dailyData = data["Time Series (Daily)"];
        const stockChartData = Object.keys(dailyData).map((date) => ({
          date,
          close: parseFloat(dailyData[date]["4. close"]),
        }));
        setStockData(stockChartData);
      } else {
        console.error("Error fetching stock data:", response.status);
      }
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  };

  const formatDate = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const filterStockDataByDateRange = () => {
    if (!stockData || !startDate || !endDate) {
      return stockData;
    }

    return stockData.filter((data) => {
      const currentDate = new Date(data.date).getTime();
      const startDateValue = new Date(startDate).getTime();
      const endDateValue = new Date(endDate).getTime();
      return currentDate >= startDateValue && currentDate <= endDateValue;
    });
  };

  const filteredData = filterStockDataByDateRange();

  const chartData = {
    labels: filteredData
      ? filteredData.map((data) => formatDate(data.date))
      : [],
    datasets: [
      {
        label: "Stock Price",
        data: filteredData ? filteredData.map((data) => data.close) : [],
        fill: false,
        borderColor: "rgba(10, 101, 206, 1)",
      },
    ],
  };
  return (
    <div>
      {stockData ? (
        <div className="chart-container">
          <div className="chart-info">
            <h2>Istoricul acțiunilor {symbol} </h2>
            <div>
              <label htmlFor="start-date">De la:</label>
              <input
                type="date"
                id="start-date"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </div>
            <div>
              <label htmlFor="end-date">Pana la:</label>
              <input
                type="date"
                id="end-date"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </div>
            <LiveStockPrice symbol={symbol}></LiveStockPrice>
          </div>
          <div className="chart">
            <Line data={chartData} />
          </div>
        </div>
      ) : (
        <h2 className="data-loading">Datele despre actiuni se incarca...</h2>
      )}
    </div>
  );
}

function Example(props) {
  const [html, setHtml] = useState("");
  useEffect(() => {
    setHtml(props.info);
  }, [html]);

  return (
    <div>
      <Helmet>
        <title>Blitzscaling - {props.title} </title>
      </Helmet>
      <Header />
      <div className="info-container">
        <div className="info-header">
          <h1 className="info-title">{props.title}</h1>
        </div>
        <div className="info-content">{parse(html)}</div>
      </div>
      <StockChart symbol={props.symbol}></StockChart>
      <Footer page={props.alt} />
    </div>
  );
}

export default Example;
