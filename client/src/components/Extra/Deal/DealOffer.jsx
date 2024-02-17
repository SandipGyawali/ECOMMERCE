import { useEffect, useState } from "react";
import styles from "../../../styles/dealOffer.module.css";
import Unit from "./Unit";
import { useDealAndOffersQuery } from "../../../redux/api/extraApiSlice";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function DealOffer() {
  const [time, setTime] = useState(new Date());
  const { data, error, isLoading, isError } = useDealAndOffersQuery();
  let timeObj;
  useEffect(() => {
    const timer = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const tick = () => {
    setTime(new Date());
  };

  // format time
  const formatTime = (date) => {
    const days = date.getDay();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const isPm = hours >= 12;
    hours = hours % 12 || 12;

    // format minute and seconds
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    // format am/pm
    const ampm = isPm ? "PM" : "AM";

    return {
      days,
      hours,
      formattedMinutes,
      formattedSeconds,
      ampm,
    };
  };

  timeObj = formatTime(time);

  return (
    <div className={styles.dealContainer}>
      <div className={styles.dealOfferWrapper}>
        <div className={styles.dealOffer}>
          <div>
            <h2>Deals and offers</h2>
            <span className={styles.dealSubHeading}>Hygiene equipments</span>
          </div>

          <div className={styles.date}>
            {data ? (
              <>
                <Unit time={timeObj.days} unit="Day" />
                <Unit time={timeObj.hours} unit="Hour" />
                <Unit time={timeObj.formattedMinutes} unit="Min" />
                <Unit time={timeObj.formattedSeconds} unit="Sec" />
              </>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className={styles.itemWrapper}>
          {data ? data.map((d) => <Item data={d} key={uuid()} />) : ""}
        </div>
      </div>
    </div>
  );
}

export default DealOffer;
