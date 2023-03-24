import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Thanks.module.scss";
import Link from "next/link";



export default function Thanks(props) {
    const handleAttendances = () => {
        const personName = prompt("人物名を入力してください");
        if (personName && personName.trim() !== "") {
          const currentTime = new Date().toLocaleString();
          const currentAttendance = `${personName},出勤,${currentTime}`;
          let attendances = JSON.parse(localStorage.getItem(personName)) || [];
          if (!attendances.includes(currentAttendance)) {
            attendances.push(currentAttendance);
            localStorage.setItem(personName, JSON.stringify(attendances));
            console.log(`${personName}の出勤処理`);
          }
        } else {
          alert("名前を入力してください");
        }
    };
          
    const handleLeaving = () => {
        const personName = prompt("人物名を入力してください");
        if (personName && personName.trim() !== "") {
          const currentTime = new Date().toLocaleString();
          const currentLeaving = `${personName},退勤,${currentTime}`;
          let attendances = JSON.parse(localStorage.getItem(personName)) || [];
          if (!attendances.includes(currentLeaving)) {
            attendances.push(currentLeaving);
            localStorage.setItem(personName, JSON.stringify(attendances));
            console.log(`${personName}の退勤処理`);
          }
        } else {
          alert("名前を入力してください");
        }
    };
      

  // JSXコード

return (
    <div className={styles.container}>
  <div className={styles.fullscreen}>
    <div className={styles.header}>
      <div className={styles.logo}>
        <img
          src="https://corp.freee.co.jp/img/common/img-site-logo_202107.gif"
          className={styles.logoImg}
        />
      </div>
      <div className={styles.buttons}>
        <button
          type="button"
          id="Leaving"
          className={styles.leaving}
          onClick={handleLeaving}
        >
          退勤
        </button>
        <button
          type="button"
          id="Attendances"
          className={styles.attendances}
          onClick={handleAttendances}
        >
          出勤
        </button>
      </div>
      <div className={styles.login}>
        <Link href="/login">
          <button className={styles.loginButton}>ログイン</button>
        </Link>
      </div>
    </div>
  </div>
</div>
  );
  
  
}
