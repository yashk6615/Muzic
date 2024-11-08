const TextInput =({label,placeholder,className,value,setValue,labelclassName})=>{
    return (
      <div
        className={`textInputDiv flex flex-col space-y-2 w-full ${className}`}
      >
        <label for={label} className={`font-semibold ${labelclassName}`}>
          {label}
        </label>
        <input
          type="text"
          placeholder={placeholder}
          className="p-2 border border-gray-400 border-solid rounded placeholder-gray-400"
          id={label}
          value={value}
          onChange={(e)=>{
            setValue(e.target.value);
          }}
        ></input>
        
      </div>
    );
}

export default TextInput