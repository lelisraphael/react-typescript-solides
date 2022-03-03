import './styles.scss'
import { ButtonProps } from './types'

const Button = ({
    ...props
}: ButtonProps): JSX.Element => {

    return (
        <button
            {...props}
        >
            {props.value}
        </button>)
}
export default Button