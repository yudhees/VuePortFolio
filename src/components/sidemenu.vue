<template>
    <div class="toggle" onclick="openNav()">
            <img class="line-menu" src="/assets/images/line-menu.png" alt="line-menu">
        </div>
        <div id="mySidenav" class="sidenav">
            <div class="closebtn" onclick="closeNav()">&times;</div>
            <ul class="sidescreen_sub icetab-container" id="icetab-container2">
                <li class="icetab current-tab" onclick="openNav()">
                    <a class="icons2" href="javascript:void(0)">
                        <img class="nav_menu_icon sidenav_img" src="/assets/images/home_icon.svg" alt="home_icon">Home
                    </a>
                </li>
                <li class="icetab" onclick="openNav()">
                    <a class="icons2" href="javascript:void(0)">
                        <img class="nav_menu_icon sidenav_img" src="/assets/images/about_icon.svg"
                            alt="about_icon">About Me
                    </a>
                </li>
                <li class="icetab" onclick="openNav()">
                    <a class="icons2" href="javascript:void(0)">
                        <img class="nav_menu_icon sidenav_img" src="/assets/images/resume_icon.svg"
                            alt="resume_icon">Resume
                    </a>
                </li>
                <li class="icetab" onclick="openNav()">
                    <a class="icons2" href="javascript:void(0)">
                        <img class="nav_menu_icon sidenav_img" src="/assets/images/skills_icon.svg"
                            alt="skills_icon">Skills
                    </a>
                </li>
                <li class="icetab" onclick="openNav()">
                    <a class="icons2" href="javascript:void(0)">
                        <img class="nav_menu_icon sidenav_img" src="/assets/images/contact_icon.svg"
                            alt="contact_icon">Contact
                    </a>
                </li>
            </ul>
        </div>
</template>