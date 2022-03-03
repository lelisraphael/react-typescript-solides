import { InputProps } from './types'
import './styles.scss';

const Input = ({
    ...props
}: InputProps): JSX.Element => {

    return (
        <input
            {...props}
            onChange={props.onChange}
            onClick={props.onClick}
            onKeyPress={props.onKeyPress}
            ref={props.inputref}
        />
    )
}
export default Input