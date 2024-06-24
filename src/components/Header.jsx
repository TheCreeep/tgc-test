import "../styles/Header.scss";
import ellipse from "../assets/Header/Ellipse.svg";
import stars from "../assets/Header/Stars.svg";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">
        Découvrez{" "}
        <span className="tgcblue">
          nos offres
          <img className="stars" src={stars} alt="" />
          <img className="ellipse" src={ellipse} alt="" />
        </span>
      </h1>

      <p className="header__subtitle">
        Trouvez le plan parfait pour votre entreprise parmi nos différentes
        options d'abonnement mensuel, trimestriel, semestriel, annuel et
        biennal.
      </p>
    </div>
  );
};

export default Header;
