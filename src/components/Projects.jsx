import React from "react";
import bestiary from "../assets/bestiary.png";
import lawoffice from "../asstes/lawoffice.png";
import texteditor from "../assets/texteditor.png";
import workdayscheduler from "../assets/workdayscheduler.png";

const Projects = () => {
  return (
    <div name="projects" className="w-full md:h-screen text-black bg-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex=col justify-center w-full h-full">
        <div className="pb-8 mt-96">
          <p className="text-4xl font-bold inline border-b-4 text-black border-black">
            Projects
          </p>
          <p className="py-6 text-xk">See some of my recent projects below</p>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid item */}

          <div
            style={{ backgroundImage: `url(${bestiary})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl justify-center font-bold text-white tracking-wider">
                Bestiary
              </span>
              <div className="justify-center text-black">Monster Creator</div>
              <div className="justify-center text-black">
                Javascript, +others add in later
              </div>
              <div className="pt-8 text-center">
                <a href="https://knave-bestiary.herokuapp.com/" target="#">
                  <button className="test-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/sethdaulton/bestiary" target="#">
                  <button className="test-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* grid item */}

          <div
            style={{ backgroundImage: `url(${lawoffice})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl justify-center font-bold text-white tracking-wider">
                Law Office of Maise A. Barringer
              </span>
              <div className="justify-center text-black">Monster Creator</div>
              <div className="justify-center text-black">
                Javascript, +others add in later
              </div>
              <div className="pt-8 text-center">
                <a
                  href="https://manylizards.github.io/lawffice/index.html"
                  target="#"
                >
                  <button className="test-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/manyLizards/lawffice" target="#">
                  <button className="test-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* grid item */}

          <div
            style={{ backgroundImage: `url(${texteditor})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl justify-center font-bold text-white tracking-wider">
                Text Editor
              </span>
              <div className="justify-center text-black">Monster Creator</div>
              <div className="justify-center text-black">
                Javascript, +others add in later
              </div>
              <div className="pt-8 text-center">
                <a href="https://quiet-falls-68674.herokuapp.com/" target="#">
                  <button className="test-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/sethdaulton/Text-Editor" target="#">
                  <button className="test-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* grid item */}

          <div
            style={{ backgroundImage: `url(${workdayscheduler})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl justify-center font-bold text-white tracking-wider">
                Workday Scheduler
              </span>
              <div className="justify-center text-black">Monster Creator</div>
              <div className="justify-center text-black">
                Javascript, +others add in later
              </div>
              <div className="pt-8 text-center">
                <a href="https://sethdaulton.github.io/Module-05-Challenge/" target="#">
                  <button className="test-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/sethdaulton/Module-05-Challenge" target="#">
                  <button className="test-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects
