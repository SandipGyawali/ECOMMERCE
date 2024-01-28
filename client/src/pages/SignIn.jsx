import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, ref } from "yup";
import styles from "../styles/signIn.module.css";
import { Link } from "react-router-dom";

//validation schema for the form
const schema = object({
  email: string().email().required("Valid Email is required"),
  password: string()
    .required("Password is required")
    .min(6, "Password length is too short - should be 6 characters minimum")
    .max(12, "Password length cannot be more than 12 character"),
  confirmPassword: string()
    .oneOf([ref("password"), null], "password must match with the above")
    .required("Password must be same"),
});

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // form submit handler
  const onSubmit = (data) => console.log(data);

  function handleGoogleSubmit() {
    console.log("THis is google button");
  }

  // implementation of form using react-hook-form
  return (
    <div className={styles.formWrapper}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="signIn-form"
        className={styles.form}
      >
        <div className={styles.title}>
          <h2>SignIn</h2>
        </div>
        <input
          type="text"
          placeholder="Enter Email"
          {...register("email", { required: true })}
          id="email"
          className={styles.input}
        />
        <p className={styles.error}>{errors.email?.message}</p>
        <input
          type="password"
          placeholder="Enter Password"
          {...register("password", { required: true })}
          id="password"
          className={styles.input}
        />
        <p className={styles.error}>{errors.password?.message}</p>
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword", { required: true })}
          id="confirm-password"
          className={styles.input}
        />
        <p className={styles.error}>{errors.confirmPassword?.message}</p>
        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>

      <button
        type="submit"
        onClick={handleGoogleSubmit}
        className={styles.submitGoogle}
      >
        <img src="/images/google.png" alt="google-img" width={20} height={20} />
        Sign In With Google
      </button>

      <div className={styles.lineWrapper}>
        <div className={styles.line} />
        <span>New to Site?</span>
        <div className={styles.line} />
      </div>

      <div className={styles.redirectWrapper}>
        <Link to="/signup">Create an Account</Link>
      </div>
    </div>
  );
}

export default SignUp;
