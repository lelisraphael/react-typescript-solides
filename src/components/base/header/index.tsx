import './styles/index.scss'
import Logo from '../../../logo.png'

const Header = () => {
    return (
        <div className="logo">
            <img className="content_logo" src={Logo} alt="Sólide Tecnologia" />
        </div>
    )
}

export default Header