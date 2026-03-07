import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import "./dashboard.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Dashboard() {

  const [title, setTitle] = useState("Hero Page");
  const [data, setData] = useState([]);
  const [heroData, setHeroData] = useState([]);

  const sections = [
    // { name: "Hero Page", url: "http://127.0.0.1:8000/api/hero_page/" },
    { name: "Our Services", url: "http://127.0.0.1:8000/api/our_services/" },
    { name: "Image Portfolio", url: "http://127.0.0.1:8000/api/image-portfolio/" },
    { name: "Video Portfolio", url: "http://127.0.0.1:8000/api/video-portfolio/" },
    { name: "Core Services", url: "http://127.0.0.1:8000/api/core_services/" },
    { name: "Services List", url: "http://127.0.0.1:8000/api/services_list/" },
    { name: "Messages", url: "http://127.0.0.1:8000/api/messages/" },
    { name: "Team", url: "http://127.0.0.1:8000/api/team/" },
    { name: "Poster", url: "http://127.0.0.1:8000/api/posters/" },
    { name: "Review", url: "http://127.0.0.1:8000/api/reviews/" },
    { name: "Work", url: "http://127.0.0.1:8000/api/works/" }
  ];

  const fetchData = (section) => {

    setTitle(section.name);

    fetch(section.url)
      .then(res => res.json())
      .then(data => {
        setData(data.data);
      })
      .catch(err => console.log(err));

  };

  /* NEW FUNCTION ONLY FOR HERO PAGE */

  const heroPageClick = () => {

    setTitle("Hero Page");

    fetch("http://127.0.0.1:8000/api/hero_page/")
      .then(res => res.json())
      .then(data => {
        setHeroData(data.data);
      })
      .catch(err => console.log(err));

  };

  console.log(data);

  useEffect(() => {
    fetchData(sections[0]);
  }, []);

  return (
    <div className='dashboard'>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <h1>Dashboard</h1>

      <div className="row">
        <div className="col-2">
          <ul>

            {/* HERO PAGE */}
            <li>
              <a href="#" onClick={heroPageClick}>
                Heropage
              </a>
            </li>

            <li>
              <a href="#" onClick={() => setTitle("Our Services")}>
                Our Services
              </a>
            </li>

            <li>
              <a href="#" onClick={() => setTitle("Image Portfolio")}>
                Image Portfolio
              </a>
            </li>

            <li>
              <a href="#" onClick={() => setTitle("Video Portfolio")}>
                Video Portfolio
              </a>
            </li>

            <li>
              <a href="#" onClick={() => setTitle("Core Services")}>
                Core Services
              </a>
            </li>

            <li>
              <a href="#" onClick={() => setTitle("Services List")}>
                Services List
              </a>
            </li>

            <li>
              <a href="#" onClick={() => setTitle("Messages")}>
                Messages
              </a>
            </li>

            <li>
              <a href="#" onClick={() => setTitle("Team")}>
                Team
              </a>
            </li>

            <li>
              <a href="#" onClick={() => setTitle("Poster")}>
                Poster
              </a>
            </li>

            <li>
              <a href="#" onClick={() => setTitle("Review")}>
                Review
              </a>
            </li>

            <li>
              <a href="#" onClick={() => setTitle("Work")}>
                Work
              </a>
            </li>

          </ul>
        </div>

        <div className="col-10">
          <h1 className="dash-head">{title}</h1>

          <div>
            <div className="row">
              <div className="col-1">sl.no</div>
              <div className="col-8">Data</div>
              <div className="col-3">Action</div>
            </div>

            {
              // heroData ? (

              //   <div className="row">
              //     <div className="col-1">1</div>
              //     <div className="col-8">
              //       data
              //     </div>
              //     <div className="col-3">Edit | Delete</div>
              //   </div>

              // ) : (

                data?.map((item, index) => {
                  return (
                    <div className="row" key={index}>
                      <div className="col-1">{index + 1}</div>
                      <div className="col-8">
                        data - {index + 1}
                      </div>
                      <div className="col-3">Edit | Delete</div>
                    </div>
                  );
                })

              // )
            }

          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;