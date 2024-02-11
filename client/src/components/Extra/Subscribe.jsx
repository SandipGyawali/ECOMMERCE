import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import styles from "../../styles/subscribe.module.css";
import { useSubscribeMutation } from "../../redux/api/extraApiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const schema = object({
  email: string().email().required(),
});

function Subscribe() {
  const [subscribe, { data, error, isSuccess, isError }] =
    useSubscribeMutation();
  const successToast = (data) => toast.success(`${data}`);
  const failureToast = (data) => toast.error(`${data}`);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // toast message
  useEffect(() => {
    if (isSuccess && data) {
      successToast(data.message);
    } else if (isError && error?.data) {
      failureToast(error?.data.message);
    }
  }, [isSuccess, isError, data, error]);

  return (
    <div className={styles.subscribeContainer}>
      <h2>Subscribe on our newsletter</h2>
      <span>
        Get daily news on upcoming offers from many suppliers all over the world
      </span>
      <form
        className="subscribeForm"
        id="newsletter_form"
        onSubmit={handleSubmit(subscribe)}
      >
        <input
          type="text"
          id="email"
          className={`${styles.emailInput} ${
            errors.email?.message ? styles.emailInputError : ""
          }`}
          placeholder="Enter Email"
          {...register("email", { required: true, focus: true })}
        />
        <button className={`${styles.subscribeSubmit}`}>Subscribe</button>
      </form>
      <ToastContainer
        toastClassName={styles.toastBox}
        position="top-right"
        autoClose={3000}
        pauseOnHover={false}
        closeOnClick={true}
      />
    </div>
  );
}

export default Subscribe;
