import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import image from "../../images/image.png"
import styles from './Dashboard.module.css';
const WebsiteDashboard=()=>{
    return(
    <div className={styles.root}>
    <AppBar>
      <Toolbar>
        <Typography variant="h6" className={styles.title}>
         <img className={styles.setImage} src={image} alt="COVID-19" />
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
    )
}
export default WebsiteDashboard