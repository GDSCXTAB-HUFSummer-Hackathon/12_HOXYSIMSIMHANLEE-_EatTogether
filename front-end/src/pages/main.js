import react from ''
import school from '../images/hufs_img.jpg'
import logo from '../images/hufs_logo2.jpg'

function main() {

  return(
    <div class="navbar">
      <a href="#" id="logo">
        <img src="images/hufs_logo2.jpg" width="144">
      </a>
      
      <ul id="menu">
        <li><a href="#">1</li>
        <li><a href="#">2</li>
        <li><a href="#">3</li>
        <li><a href="#">4</li>
      </ul>
    </div>
    <div class="main-header"></div>
    
    
    <div class="products">
      <h3>미정</h3>
      
      <div class="product-list">
        <a href="#" class="product">
          <img src="images/sunglasses.jpg" width="225">
          <div class="product-name">Sunglasses</div>
          <div class="product-price">49,000</div>
        </a>
        
        <a href="#" class="product">
          <img src="images/tassel_loafer.jpg" width="225">
          <div class="product-name">Tassel loafer</div>
          <div class="product-price">89,000</div>
        </a>
          
        <a href="#" class="product">
          <img src="images/beige_bag.jpg" width="225">
          <div class="product-name">Beige Bag</div>
          <div class="product-price">69,000</div>
        </a>
        <div class="clearfix"></div>
    </div>
  )
}

export default Login;