import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8) //use useState to manage the state of the password length, number allowed, character allowed and the generated password
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [copied, setCopied] = useState(false);
  const [password, setPassword] = useState('')  // setpassword is the state that will hold the generated password
  //useRef to create a ref for the password input field, so that we can copy the password to the clipboard when the copy button is clicked
   const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {  // use useCallback to memoize the function and prevent unnecessary re-renders
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*()_+'

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    // passwordRef.current?.select() // select the password input field
    // passwordRef.current?.setSelectionRange(0, 10) // set the selection range to the entire password
    // window.navigator.clipboard.writeText(password)
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
    
  }, [password])

  useEffect(() => {   // use useEffect to call the generatePassword function whenever the dependencies change
    generatePassword()
  }, [length, numberAllowed, charAllowed, generatePassword])


  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-orange-500 text-center my-3">Password Generator</h1>
       
        <div className="flex items-center gap-2 mb-3">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 rounded-lg bg-gray-600 text-white"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />

          <button 
            onClick = {copyPasswordToClipboard}
            className="outline-none bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shrink-0">
              {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className="flex text-sm gap-x-3">
          <div className="flex items-center gap-x-1">
            <input
              type='range'
              min={8}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={(e) => {
                setNumberAllowed((prev) => !prev);
              }} 
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={charAllowed}
              id='charInput'
              onChange={(e) => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App