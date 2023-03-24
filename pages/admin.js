import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Admin.module.scss";
import Link from "next/link";

export default function Admin(props) {
  const [attendances, setAttendances] = useState([]);
  const [selectedName, setSelectedName] = useState("");
  const [salaryInfo, setSalaryInfo] = useState([]);

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const allAttendances = [];
    for (let i = 0; i < keys.length; i++) {
      const attendancesForPerson = JSON.parse(localStorage.getItem(keys[i]));
      allAttendances.push({ name: keys[i], attendances: Array.isArray(attendancesForPerson) ? attendancesForPerson : [] });
    }
    setAttendances(allAttendances);
    
  }, []);

  const handleNameChange = (event) => {
    setSelectedName(event.target.value);
  };

  useEffect(() => {
    const calculateSalaryInfo = () => {
      const salaryMap = new Map();
      attendances.forEach((person) => {
        const { name, attendances } = person;
        const totalTime = attendances.reduce((total, attendance) => {
          const [_, status, time] = attendance.split(",");
          if (status === "出勤") {
            total.startTime = new Date(time);
          } else {
            const diff = new Date(time) - total.startTime;
            total.workTime += diff;
            total.startTime = null;
          }
          return total;
        }, { startTime: null, workTime: 0 }).workTime;

        const salary = (totalTime / 3600000) * 1000;
        salaryMap.set(name, { workTime: totalTime, salary });
      });

      const salaryInfoList = Array.from(salaryMap.entries()).map(([name, info]) => ({
        name,
        workTime: info.workTime,
        salary: info.salary.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }),
      }));

      setSalaryInfo(salaryInfoList);
    };

    calculateSalaryInfo();
  }, [attendances]);

  const filteredAttendances = attendances.find(
    (person) => person.name === selectedName
  );

  return (
    <div className={styles.container}>
        <Link href="/thanks">ホームに戻る</Link>
      <div className={styles.header}>出退勤情報一覧</div>
      <div className={styles.attendances}>
        <div className={styles.filter}>
          <label htmlFor="nameFilter">名前で絞り込み:</label>
          <select id="nameFilter" value={selectedName} onChange={handleNameChange}>
            <option value="">すべて</option>
            {attendances.map((person) => (
              <option key={person.name} value={person.name}>
                {person.name}
              </option>
            ))}
          </select>
        </div>
        {filteredAttendances && (
            <div className={styles.attendance}>
              <div className={styles.personName}>{filteredAttendances.name}さんの出退勤情報</div>
                <ul className={styles.attendanceList}>
                  {filteredAttendances.attendances.map((attendance, index) => {
                    const [name, status, time] = attendance.split(",");
                    const timeString = new Date(time).toLocaleString("ja-JP");
                    return (
                      <li key={index}>
                        <span className={status === "出勤" ? styles.start : styles.end}>{status}</span>
                        {timeString}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
             <div className={styles.salaryInfo}>
        {salaryInfo.map((info) => (
          <div key={info.name}>
            <span>{info.name}さんの勤務時間: {Math.floor(info.workTime / 3600000)}時間{Math.floor((info.workTime % 3600000) / 60000)}分</span>
            <span>{info.name}さんの給与: {info.salary}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
  );

}
