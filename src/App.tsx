import React from 'react'
import { Typography, Button, FormGroup, FormLabel, Checkbox, FormControl, FormControlLabel, RadioGroup, Box, Grid, TextField } from "@mui/material"
import ConfigCard from './ConfigCard';
const QueryEngine = require('@comunica/query-sparql-link-traversal').QueryEngine;


const store = `https://raw.githubusercontent.com/AECOstore/RESOURCES/main/stores/root.ttl`

const Store = ({ piral }) => {
  const [selectedStore, setSelectedStore] = React.useState(store)
  const [configs, setConfigs] = React.useState([])
  const [selectedConfig, setSelectedConfig] = React.useState()
  const constants = piral.getData("CONSTANTS")

  async function queryStoresForConfigurations() {
    const myEngine = new QueryEngine()
    const query = `
    prefix dcat: <http://www.w3.org/ns/dcat#>
    prefix mifesto: <http://w3id.org/mifesto#>
    prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>

    SELECT DISTINCT ?config ?comment ?title ?route WHERE {
      ?store dcat:dataset+ ?config .
      ?config a mifesto:Configuration  ;
      rdfs:comment ?comment ;
      rdfs:label ?title ;
      mifesto:initialRoute ?route.
    }`


    const results = await myEngine.queryBindings(query, { sources: [selectedStore] })
    const configs = await results.toArray()
    console.log('configs :>> ', configs);
    const all = []
    configs.forEach(c => all.push({ 
      description: c.get('comment').id.replaceAll('"', ''), 
      title: c.get('title').id.replaceAll('"', ''), 
      url: c.get('config').id,
      route: c.get('route').id.replaceAll('"', '')
    }))
    setConfigs(all)
  }

  function toggleRadio(e) {
    setSelectedConfig(e.target.value)
  }

  function setFeedUrl(config) {
    piral.setData(constants.FEEDURL, config)
  }

  return (
    <div style={{ textAlign: "justify", padding: 30, alignItems: "center", marginTop: "100px" }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>

          <Typography variant="h4" style={headerStyle}>Get Started</Typography>
          <Typography>In this demo, a single store instance is created, which gives you the choice to load 2 configurations. Please select one or more Mifesto stores below, or add a new one. The Access Point of this store is: </Typography><br />
          <TextField fullWidth defaultValue={store} onChange={(e) => setSelectedStore(e.target.value)} />
          <Button fullWidth style={buttonStyle} variant="contained" onClick={queryStoresForConfigurations}>Find Modules</Button>
          <Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {configs.map(item => {
                return <Grid item key={item}>
                  <ConfigCard data={item} activateConfig={setFeedUrl} />
                </Grid>
              })}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>

    </div>
  )
}
export default Store

const headerStyle = { marginTop: 30, marginBottom: 20 }
const buttonStyle = { marginTop: 15, marginBottom: 15 } 