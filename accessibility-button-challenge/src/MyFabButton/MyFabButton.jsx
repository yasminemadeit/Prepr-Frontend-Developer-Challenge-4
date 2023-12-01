import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import AccessibleIcon from '@mui/icons-material/Accessible';
import { css } from '@emotion/css';
import Popup from './Popup';


const styles = {
    menuButton: css`
      position: fixed;
      bottom: ${theme => theme.spacing(2)};
      right: ${theme => theme.spacing(2)};
    `,
   
    
  };

const MyFabButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [fabVisible, setFabVisible] = useState(true);

  const [buttonPopup, setButtonPopup] = useState(false);



  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      {fabVisible && (
        <Fab
          color="success"
          aria-label="accessibility"
          className={styles.menuButton}
          onClick={()=> setButtonPopup(true)}
        >
          <AccessibleIcon />
        </Fab>
      )}
      <Popup trigger={buttonPopup} setTrigger= {setButtonPopup}>
      </Popup>

    </div>
  );
};

export default MyFabButton;
