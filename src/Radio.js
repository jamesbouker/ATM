export default function Radio(props) {
  return (
    <div>
      <input
        type="radio"
        id={props.id}
        name={props.name}
        value={props.id}
        checked={props.checked === props.id}
        onChange={(e) => {
          props.setChecked(props.id);
        }}
      />
      <label style={{ textTransform: "capitalize" }} htmlFor={props.id}>
        {props.id}
      </label>
    </div>
  );
}
