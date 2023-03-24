import React, {useState} from "react"
import styles from "../styles/Login.module.scss"
import Link from "next/link"


function Login(){
    const initialValues = {username: "", password: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(errors);
        setisSubmit(true);
    };

    const handleChange = (e) => {
        console.log(e.target);
        const{ name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
        e.preventDefault();
        //ログイン情報送信
        //バリデーションチェック
        setFormErrors(validate(formValues));
        setisSubmit(true);
    };

    const validate = (values) => {
        const errors = {};
        if(!formValues.username){
            errors.username = "ユーザー名を入力してください";
        }
        if (!formValues.password){
             errors.password= "パスワードを入力してください";
        }else if (formValues.password.length < 4 || formValues.password.length > 15) {
            errors.password ="4文字以上15文字以下のパスワードを入力してください";
        }
        return errors;
    };

    return(
        <div className= {styles.Login}>
            <form onSubmit={(e) => handleSubmit(e)}> 
               <h1 className={styles.title}>ログインフォーム</h1>
               <hr className={styles.hr}/>
               <div className={styles.uiForm}>
                   <div className={styles.formField}>
                       <label>ユーザー名</label>
                       <input type="text" 
                       placeholder="ユーザー名" 
                       name="username" 
                       onChange={(e)=> handleChange(e)}
                       className={styles.input}/>
                   </div>
               </div>
               <p className={styles.errorsmessage}>
                {formErrors.username}</p>
               <div className={styles.lsuiForm}>
                   <div className={styles.formField}>
                       <label>パスワード</label>
                       <input 
                           type="password" 
                           placeholder="パスワード" 
                           name="password"
                           onChange={(e)=> handleChange(e)}
                       className={styles.input}/>
                   </div>
                   <div>
                   <Link href="/admin">
                    <button>ログイン</button>
                   </Link>
                   <p className={styles.errorsmessage}>{formErrors.username}</p>
                   {Object.keys(formErrors).length === 0 && isSubmit &&(
                       <div className={styles.ok}>ログインに成功しました</div>
                   )}
                   </div>
                   <Link href="/thanks">
                   <button>戻る</button>
                   </Link>
               </div>
            </form>
       </div>
   );
}


export default Login;