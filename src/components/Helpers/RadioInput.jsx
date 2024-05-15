import Checkbox from "@mui/material/Checkbox";

export default function RadioInput({ label, name, options, value, onChange }) {
  return (
    <div className="mb-4">
      <p className="block text-gray-700 font-bold mb-2">{label}</p>
      <div className="flex items-center mb-2">
        {options.map((option) => (
          <div className="flex items-center mr-4" key={option}>
            <Checkbox
              id={`${name}-${option.toLowerCase()}`}
              name={name}
              checked={value === option.toLowerCase()}
              onChange={(e) =>
                onChange(e.target.checked ? option.toLowerCase() : "")
              }
              className="mr-2"
              sx={{
                "& .MuiSvgIcon-root": {
                  color: "purple",
                  border: "1px solid transparent",
                },
              }}
            />
            <label htmlFor={`${name}-${option.toLowerCase()}`}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
