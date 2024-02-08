import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => console.log('onSubmit', data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register("firstName", {maxLength: 15})} />
      {errors.firstName && <p>15文字以内で入力してください。</p>}
      <label>Last Name</label>
      <input {...register("lastName", {maxLength: 15})} />
      {errors.lastName && <p>15文字以内で入力してください。</p>}
      <label>Email</label>
      <input {...register("email", { required: true })} />
      {errors.email && <p>メールアドレスは必須です。</p>}
      <input type="submit" value="submit" />
    </form>
  )
}

export default App
