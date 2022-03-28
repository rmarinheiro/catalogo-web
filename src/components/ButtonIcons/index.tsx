import "./style.css";
import {ReactComponent as ArrowIcon} from 'assets/images/seta.svg';

const ButtonIcon = () => {
  return (
    <div className="btn-container">
      <div>
        <button className="btn btn-primary">
          <h6>Inicie Sua Busca</h6>
        </button>
      </div>
      <div className="btn-icon-container">
       <ArrowIcon/>
      </div>
    </div>
  );
};

export default ButtonIcon;
