import './styles/index.css'
import Logo from '../../../logo.png'

const Header = () => {
    return (
        <div className="logo">
            <img className="content_logo" src={Logo} alt="User Search" />
        </div>
    )
}

export default Header