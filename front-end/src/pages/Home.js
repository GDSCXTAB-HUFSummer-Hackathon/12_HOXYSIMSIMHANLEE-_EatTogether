import './Home.css'

function Home() {
  return (
    <div className="Home">
      <div class="navbar">
        <a href="#" id="logo">
          <img className="hufsImage" src="images/hufs_logo.jpg" width={ 200 }/>
        </a>

        <ul id="menu">
        <li><a href="#">Information</a></li>
        <li><a href="login.html">Login</a></li>
      </ul>

      </div>
      <div class="main-header"></div>

      <div class="foods">
      <h3>Foods</h3>

      <div class="food-list">
        <a href="#" class="food">
          <img className="chickenImage" alt="chicken" src="images/chicken.jpg" width= {200} height={ 200}/>
          <div class="food-name">치킨</div>
        </a>

        <a href="#" class="food">
          <img className="pizzaImage" alt="pizza" src="images/pizza.jpg" width= {200} height={ 200}/>
          <div class="food-name">피자</div>
        </a>

        <a href="#" class="food">
          <img className="hamburgerImage" alt="hamburger" src="images/hamburger.jpg" width= {200} height={ 200}/>
          <div class="food-name">햄버거</div>
        </a>

        <a href="#" class="food">
          <img className="lunchboxImage" alt="lunchbox" src="images/lunchbox.jpg" width= {200} height={ 200}/>
          <div class="food-name">치킨</div>
        </a>

        <a href="#" class="food">
          <img className="zzazangImage" alt="chicken" src="images/zzazang.jpg" width= {200} height={ 200}/>
          <div class="food-name">짜장면</div>
        </a>

        <a href="#" class="food">
          <img className="zzimdakImage" alt="zzimdak" src="images/zzimdak.jpg" width= {200} height={ 200}/>
          <div class="food-name">찜닭</div>
        </a>

        <div class="clearfix"></div>
      </div>
    </div>
  </div>
  );
}

export default Home;
