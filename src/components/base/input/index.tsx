import { InputProps } from './type'
import './styles.scss'

const Input = ({
    ...props
}: InputProps): JSX.Element => {

    return (
        <input
            {...props}
            onChange={props.onChange}
            onClick={props.onClick}
            ref={props.inputRef}
        />
    )
}
export default Input