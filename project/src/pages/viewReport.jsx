import React from "react";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebase.config";
import Spinner from "../components/Spinner";

function ViewReport() {
  const [datas, setDatas] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetchDatas();
  }, [reload]);

  const fetchDatas = async () => {
    try {
      // get reference
      const datasRef = collection(db, "listings");
      // create a querry
      const q = query(datasRef, orderBy("timestamp", "desc"));
      //Execute querry
      const querySnap = await getDocs(q);
      let listings = [];
      querySnap.forEach((doc) => {
        console.log(doc.data());
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      console.log(datas);
      setDatas(listings);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //reloads data after every 3000millisecnd
  setInterval(() => {
    setReload((prev) => 
      !prev
    );
  }, 3000);

  // TODO:implement logic for displaying data

  return (
    <div className="ViewReportContainer">
      <p className="SensorDataHeaderMain">Report Overview</p>
      {loading ? (
        <Spinner></Spinner>
      ) : (
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
      )}
    </div>
  );
}

export default ViewReport;
