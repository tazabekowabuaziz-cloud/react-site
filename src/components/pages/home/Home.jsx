// import React from 'react';

// import "./Home.css"

// const Home = () => {
//     return (
//             <div id="home"style={{
//                     backgroundImage:
//                    "url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/hpBGCnzOvdtQoMyE48gvwp2y5yx.jpg')",
//                    backgroundRepeat: "no-repeat",
//                    backgroundSize: "cover",
//                    backgroundPosition: "center center",
//                    height: "500px",}}>
//                     <div className="container">
//                         <div className="home">
                            
//                         </div>
//                     </div>
       
//        <h1>welcome</h1>
//        <h2>miliony filmov serialov i ludei isleduite seichas</h2>
//         </div>
//     );
// };

// export default Home;

import React from 'react';
import "./Home.css";

const Home = () => {
  return (
    <div id="home" style={{
        
        backgroundImage:
                   "url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/hpBGCnzOvdtQoMyE48gvwp2y5yx.jpg')",
                   backgroundRepeat: "no-repeat",
                   backgroundSize: "cover",
                   backgroundPosition: "center center",
      }}
    >
       
      <div className="container">
        <div className="home">
            <center>
 <h1>Добро пожаловать</h1>
          <h2>
            Миллионы фильмов, сериалов и людей. Исследуйте сейчас.
          </h2>
            </center>
         
          <form className="home-search" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Найти фильм, сериал, персону..."
            />
            <button type="submit">Поиск</button>
          </form>
        </div>
      </div>
    </div>
    
  );
};


export default Home;