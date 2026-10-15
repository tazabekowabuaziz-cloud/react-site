import './Footer.css';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <div className="logo-line">
            THE <span className="logo-pill"></span>
          </div>
          <div>M<span className="logo-circle"></span>VIE</div>
          <div className="logo-bottom">
            <span className="logo-gradient"></span>DB
          </div>
        </div>

        <div className="footer-column">
          <h3>Главное</h3>
          <a href="#">О TMDB</a>
          <a href="#">Документация API</a>
          <a href="#">API для бизнеса</a>
          <a href="#">Статус системы</a>
        </div>

        <div className="footer-column">
          <h3>Участвуйте</h3>
          <a href="#">Библия редакторов</a>
          <a href="#">Добавить новый фильм</a>
          <a href="#">Добавить новый сериал</a>
        </div>

        <div className="footer-column">
          <h3>Сообщество</h3>
          <a href="#">Руководства</a>
          <a href="#">Доска почёта</a>
          <a href="#">Форумы поддержки</a>
        </div>

        <div className="footer-column">
          <h3>О праве</h3>
          <a href="#">Условия использования</a>
          <a href="#">API Правила использования</a>
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Политика DMCA</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;