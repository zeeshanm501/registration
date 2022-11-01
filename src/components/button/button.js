import { Button } from '@mui/material';
import './button.css';

export default function BootstrapBtn(props) {
    const { label, onClick, classes } = props;

    return <>
        <button className={classes} onClick={onClick}>{label}</button>
    </>
};

export function MuiButton(props) {
    const { label, onClick, type, variant } = props;

    return <>
        <Button onClick={onClick} variant={variant}>{label}</Button>
    </>

}
