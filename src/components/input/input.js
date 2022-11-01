import { TextField } from '@mui/material';
import './input.css';

function DefaultInput(props) {
    const { label, onChange, disabled, required, min, max, type, value, placeholder } = props;

    return <>
        <input type={type} class="form-control customInput" id="floatingInput" placeholder={placeholder} value={value} onChange={onChange} />
    </>
};

function FloatingInput(props) {
    const { label, onChange, disabled, required, min, max, type, value, placeholder } = props;

    return <>
        <div class="form-floating mb-3">
            <input type={type} class="form-control customInput" id="floatingInput" placeholder={placeholder} value={value} onChange={onChange} />
            <label for="floatingInput">{label}</label>
        </div>
    </>
};

function MuiInput(props) {
    const { label, variant, onChange, name, helperText, error, disabled, required, min, max, type, value, placeholder } = props;
    return <>
        <TextField
            fullWidth
            label={label}
            variant={variant}
            onChange={onChange}
            name={name}
            helperText={helperText}
            disabled={false}
            required={required}
            error={error}
        />
    </>

}

function MuiDatepicker(props) {
    const { label, variant, onChange, name, id, helperText, error, disabled, required, min, max, type, value, placeholder } = props;
    return <>
        <TextField
            fullWidth
            name={name}
            id={id}
            label={label}
            type={type}
            defaultValue="YY-MM-DD"
            onChange={onChange}
            InputLabelProps={{
                shrink: true,
            }}
        />
    </>
}

export { DefaultInput, FloatingInput, MuiInput, MuiDatepicker };