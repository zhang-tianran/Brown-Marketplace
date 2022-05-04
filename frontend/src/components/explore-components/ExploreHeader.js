import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Component Imports
import Title from '../boilerplate-components/Title'
import ProfilePageButton from '../boilerplate-components/ProfilePageButton'
import SearchBar from '../explore-components/SearchBar'

// Image Imports
import xButton from "../../images/back-button.png"
import pfp from "../../images/profile-pic.png"

// CSS Imports
import '../boilerplate-header.css'
import './explore-header.css'

// MUI Imports
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Container from '@mui/material/Container'
import Search from '@mui/icons-material/Search'

function ExploreHeader(props) {
    // State for Categories Drawer
    const [drawerOpen, toggleDrawer] = useState(false)  

    // create a list of dummy categories
    const categories = [
        "All",
        "Electronics",
        "Fashion",
        "Home",
        "Sports",
        "Other"
    ]

    return (
    <div className="boilerplate-header">
        {/* On click, returns to the previous page. */}
        <img src={xButton} alt="categories" className="categories-button" onClick={() => toggleDrawer(true)} />
        
        <div>
            <Title title={props.title} />
            <div className="search-bar-container">
                <SearchBar />
            </div>
        </div>
        
        {/* </Container> */}

        {/* Define Categories Drawer */}
        <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)}>
            <List className="w-64">
                <ListItem>
                    <ListItemText>Categories</ListItemText>
                </ListItem>   
                 {/*Create Buttons for each cateofy in categories */}
                {categories.map((category, index) => (
                    <ListItem button key={index}>
                        <Link to={`/category/${category}`}>
                            <ListItemText>{category}</ListItemText>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Drawer>

        {/* If showProfile is true, render ProfilePageButton.
        Else, render empty div to keep the header layout consistent (flex: space-around). */}
        { props.showProfile && <ProfilePageButton userPicture={pfp}/> }
        { !props.showProfile && <div/> } 
    </div>
    )
}

ExploreHeader.defaultProps = {
  showProfile: true
}

export default ExploreHeader