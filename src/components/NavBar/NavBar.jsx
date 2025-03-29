import React, { useEffect, useState } from "react";
import "./Navbar.css";
import $ from "jquery";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, IconButton } from "@mui/material";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    // jQuery logic for animation
    var word = $(".word").text();
    var HTML = "";
    for (var letter of word) {
      HTML += letter === " "
        ? `<span class='space'>&nbsp;</span>`
        : `<span class='letter'>${letter}</span>`;
    }
    $(".word").html(HTML);
    $(".letter").mouseenter(function () {
      const el = $(this);
      el.addClass("rubberBand");
      el.css("color", "#ff0000"); // Change color to red on hover
      el.one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function () {
          el.removeClass("rubberBand");
        }
      );
    });
    $(".letter").mouseleave(function () {
      $(this).css("color", ""); // Reset color after hover
    });
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="navbar">
      {/* Name on the left */}
      <div
        className="name"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <div className="word">Dharun Prakash J A</div>
      </div>

      {/* Links for desktop */}
      <nav className="links">
        <a href="#home">
          <HomeIcon />
        </a>
        <a href="#education">
          <SchoolIcon />
        </a>
        <a href="#skills">
          <CodeIcon />
        </a>
        <a href="#certificates">
          <WorkspacePremiumIcon />
        </a>
      </nav>

      {/* Drawer for mobile */}
      <IconButton
  className="menu-icon"
  onClick={toggleDrawer}
  style={{ color: "#ffc000" }} // Default color set to red
>
  <MenuIcon />
</IconButton>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <div className="drawer-links">
          <a href="#home" onClick={toggleDrawer}>
            <HomeIcon /> Home
          </a>
          <a href="#education" onClick={toggleDrawer}>
            <SchoolIcon /> Education
          </a>
          <a href="#skills" onClick={toggleDrawer}>
            <CodeIcon /> Skills
          </a>
          <a href="#certificates" onClick={toggleDrawer}>
            <WorkspacePremiumIcon /> Certificates
          </a>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
