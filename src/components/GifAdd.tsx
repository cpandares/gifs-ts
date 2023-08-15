import { useState } from "react"

interface PropsInterceCategory {
  onNewCategory: (value: string) => void;
}

export const GifAdd = ({ onNewCategory } : PropsInterceCategory) => {

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    onNewCategory(inputValue);
    setInputValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

    </form>
  )
}
