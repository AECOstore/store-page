import * as React from "react";
import {Card, CardContent, Button, Typography} from "@mui/material";
import {Redirect, useHistory} from 'react-router-dom'

const ConfigCard = (props) => {
    const {activateConfig, data} = props
    const {description, title, url, route} = data
    const history = useHistory();

    function activate() {
        history.push(route)
       activateConfig(url)
    }

  return (
    <div>
          <Card style={{top: 30, width: 300}} variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h5">
                {title}
              </Typography>
              <Typography variant="body1">
                {description}
              </Typography>
              <Button
            // className={classes.button}
            style={{top: 10, position: "relative"}}
            variant="contained"
            fullWidth
            color="primary"
            onClick={activate}
          >
            Activate Config
          </Button>
            </CardContent>
          </Card>
    </div>
  )

};

export default ConfigCard;