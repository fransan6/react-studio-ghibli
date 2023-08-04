import susuwatari from '../assets/susuwatari.png';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <h3 className="navbar-header">Studio Ghibli films</h3>
      <img className="susuwatari-image "src={susuwatari} alt="Black dustballs from Howl's Moving Castle" />
    </nav>
  )
}
