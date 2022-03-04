import './styles.scss'
import { ButtonProps } from './types'

const Button = ({
    ...props
}: ButtonProps): JSX.Element => {

    return (
        <button
            {...props}
        >
            Pesquisar
        </button>)
}
export default Button


