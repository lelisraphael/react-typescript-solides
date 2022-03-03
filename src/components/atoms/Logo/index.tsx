import './styles.scss'
import imgLogo from '../../../logo.png'

const Logo = () => {
    return (
        <div className="logo">
            <img className="content_logo" src={imgLogo} alt="Sólide Tecnologia" />
        </div>
    )
}

export default Logo