import { useForm } from 'react-hook-form';

function App() {
  // useFormから関数をimport
  const { register, handleSubmit, } = useForm();

  const onSubmit = (data) => console.log('onSubmit', data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("firstName")} />
      <input type="submit" />
    </form>
  )
}

export default App
