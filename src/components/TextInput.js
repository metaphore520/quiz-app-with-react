import classes from "../styles/TextInput.module.css";

function TextInput({ icon, ...rest }) {
  return (
    <div class={classes.textInput}>
      <input {...rest} />
      <span class="material-icons-outlined"> {icon} </span>
    </div>
  );
}

export default TextInput;
