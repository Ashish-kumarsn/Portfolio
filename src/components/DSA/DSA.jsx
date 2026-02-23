import React from "react";
import "./DSA.css";

// Images
import leetcodeImg from "../../assets/leetcode.png";
import gfgImg from "../../assets/GFG.png";
import contestImg from "../../assets/contest.jpg";

const DSA = () => {
  return (
    <section id="dsa">
      <div className="mb-20 text-center">
  {/* Small Line */}
  <p className="mb-4 text-lg text-zinc-400">
    logic through consistency
  </p>

  {/* Big Heading */}
  <h2 className="text-[3rem] font-bold leading-[1.1] tracking-[-0.01em] text-white">
    Problem Solving{" "}
    <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent italic">
      Journey
    </span>
  </h2>
</div>

      <div className="container portfolio__container">
        {/* LeetCode Card */}
        <div
          className="portfolio_item flex flex-col justify-between hover:shadow-xl transition duration-200 cursor-pointer"
          onClick={() =>
            window.open("https://leetcode.com/Ashish_kumar8651/", "_blank")
          }
        >
          <div className="top">
            <div className="portfolio_item-img" style={{ backgroundColor: "white" }}>
              <img src={leetcodeImg} alt="LeetCode" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3 text-center">LeetCode Profile</h3>
            <p className="text-sm leading-5 text-center">
              Solved 300+ problems covering arrays, strings, trees, graphs, and dynamic programming.
            </p>
          </div>
          <div className="flex justify-center mt-4 mb-2">
            <img
              src={leetcodeImg}
              alt="LeetCode Icon"
              className="w-8 h-8 object-contain hover:scale-110 transition-transform"
            />
          </div>
        </div>

        {/* GFG Card */}
        <div
          className="portfolio_item flex flex-col justify-between hover:shadow-xl transition duration-200 cursor-pointer"
          onClick={() =>
            window.open("https://auth.geeksforgeeks.org/user/kaumatchobey/practice/", "_blank")
          }
        >
          <div className="top">
            <div className="portfolio_item-img" style={{ backgroundColor: "white" }}>
              <img src={gfgImg} alt="GFG" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3 text-center">GFG Profile</h3>
            <p className="text-sm leading-5 text-center">
              Solved 200+ problems and practiced across all key DSA categories.
            </p>
          </div>
          <div className="flex justify-center mt-4 mb-2">
            <img
              src={gfgImg}
              alt="GFG Icon"
              className="w-8 h-8 object-contain hover:scale-110 transition-transform"
            />
          </div>
        </div>

        {/* Contest Card */}
        <article className="portfolio_item flex flex-col justify-between">
          <div className="top">
            <div className="portfolio_item-img" style={{ backgroundColor: "white" }}>
              <img src={contestImg} alt="Contests" />
            </div>
            <h3 className="leading-5 !mt-3 !mb-3 text-center">Contests & Ratings</h3>
            <p className="text-sm leading-5 text-center">
              Regular participant in LeetCode and GFG contests. Highest rating: 1600+ (GFG).
            </p>
          </div>

          {/* Centered Icon Links */}
          <div className="flex justify-center gap-6 items-center mt-4 mb-2">
            {/* LeetCode Contest Icon */}
            <a
              href="https://leetcode.com/contest/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img
                src={leetcodeImg}
                alt="LeetCode Contest"
                className="w-8 h-8 object-contain"
              />
            </a>

            {/* GFG Contest Icon */}
            <a
              href="https://practice.geeksforgeeks.org/contest/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img
                src={gfgImg}
                alt="GFG Contest"
                className="w-8 h-8 object-contain"
              />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default DSA;
