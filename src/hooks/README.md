# react-nice-hooks

### Collection of useful simple enough reusable React custom hooks.

### Just import and use them e.g

```
import {useArray,
useManyInputs,
useTextInput,
useAsync,
useToggleInput,
useFetch

} from 'react-nice-hooks';

const App = () => {
  const [array, setArray, pushItem, filterArray, updateArray, removeElementById, clearArray] = useArray([] , '_id')

  const [
    state,
    handleTxtChange,
    handleToggleChange,
    changeInput,
    resetState,
    setState,
  ] = useManyInputs()

  const  [loginState, handleChange, resetState, setLoginState] = useTextInput({
    name : '',
    email : ''
  })

  const [isDialogOpen, toggleDialogOpen, setDialogOpen] = useToggleInput(false)

   let {
    error,
    loading,
    value,
    setValue,
  } = useFetch(
    `${API_BASE_URL}/users/${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
    [id],
    user // for res.data.user,
    // use product for res.data.product
  );


  // changeInput('email' , 'umadahmad1928@gmail.com')

  return (
    <TextField value={state.name} onChange={handleTxtChange} />
  )
}


```
