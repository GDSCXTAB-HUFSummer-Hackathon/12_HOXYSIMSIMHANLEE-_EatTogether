import './Home.css'

function Home() {
  return (
    <div className="Home">
      <div class="navbar">
        <a href="#" id="logo">
          <img className="hufsImage" alt="hufs_logo" src="image/hufs_logo.jpg" />
        </a>
      
        <ul id="menu">  
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
        </ul>
      </div>
      <div class="main-header"></div>

      <div class="foods">
      <h3>미정</h3>

      <div class="food-list">
        <a href="#" class="food">
          <img className="chickenImage" alt="chicken" src="images/chicken.jpg" />
          <div class="food-name">Chicken</div>
        </a>

        <a href="#" class="food">
          <img className="chickenImage" alt="chicken" src="images/chicken.jpg" />
          <div class="food-name">Chicken</div>
        </a>

        <a href="#" class="food">
          <img className="pizzaImage" alt="pizza" src="images/pizza.jpg" />
          <div class="food-name">Pizza</div>
        </a>

        <a href="#" class="food">
          <img className="hamburgerImage" alt="hamburger" src="images/hamburger.jpg" />
          <div class="food-name">햄버거</div>
        </a>

        <a href="#" class="food">
          <img className="lunchboxImage" alt="lunchbox" src="images/lunchbox.jpg" />
          <div class="food-name">치킨</div>
        </a>

        <a href="#" class="food">
          <img className="zzazangImage" alt="chicken" src="images/zzazang.jpg" />
          <div class="food-name">짜장면</div>
        </a>

        <a href="#" class="food">
          <img className="zzimdakImage" alt="zzimdak" src="images/zzimdak.jpg" />
          <div class="food-name">찜닭</div>
        </a>

        
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
  );
}

export default Home;
