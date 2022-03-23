import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './App.css'
function App() {
  return (
      <div className="container">
          <Carousel>
              <div>
                  <img src="https://images.unsplash.com/photo-1609234656388-0ff363383899?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JvdXAlMjBvZiUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80" />
              </div>
              <div>
                  <img src="https://media.istockphoto.com/photos/yerevan-capital-of-armenia-in-front-of-mt-ararat-picture-id1144776438?k=20&m=1144776438&s=612x612&w=0&h=Qg8l3Ibz1fAJlS8NaV6sNHLocTZweUh1il9rGucgdX4=" />
              </div>
              <div>
                  <img src="https://media.istockphoto.com/photos/yerevan-capital-of-armenia-in-front-of-mt-ararat-picture-id1144776438?k=20&m=1144776438&s=612x612&w=0&h=Qg8l3Ibz1fAJlS8NaV6sNHLocTZweUh1il9rGucgdX4=" />
              </div>
          </Carousel>
      </div>

  );
}

export default App;
