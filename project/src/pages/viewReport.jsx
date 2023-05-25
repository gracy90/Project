import React from "react";

function ViewReport() {
  return (
    <div className="ViewReportContainer">
      <p className="SensorDataHeaderMain">Report Overview</p>
      <div className="ViewReportDataContainer">
        <div>
          <p className="SensorDataHeader">Data from Seismic sensor</p>
          <div className="DataContainer">
            <p className="SensorData">56</p>
          </div>
        </div>
        <div>
          <p className="SensorDataHeader">Data from Acoustic Sensor</p>
          <div className="DataContainer">
            <p className="SensorData">45</p>
          </div>
        </div>
        <div>
          <p className="SensorDataHeader">Inference</p>
          <div className="DataContainer">
            <p className="SensorData">87</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewReport;
